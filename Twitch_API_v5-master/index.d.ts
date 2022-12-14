// Type definitions for twitch-api-v5
// Project: https://github.com/thedist/Twitch_API_v5
// Definitions by: Jeff Martin <https://github.com/thedist>

// Main module objects
export let clientID: string
export let debug: boolean
export let auth: authInterface
export let bits: bitsInterface
export let feed: feedInterface
export let channels: channelsInterface
export let chat: chatInterface
export let clips: clipsInterface
export let collections: collectionsInterface
export let communities: communitiesInterface
export let games: gamesInterface
export let ingests: ingestsInterface
export let search: searchInterface
export let streams: streamsInterface
export let teams: teamsInterface
export let users: usersInterface
export let videos: videosInterface
export let other: otherInterface

declare type callbackFunc = ( error: any, response: any ) => void;

// Endpoint Functions
interface authInterface {

    /** Get access token from Authorization Code Flow. */
    getAccessToken(data: {
        clientSecret: string
        redirectURI: string
        code: string
        state?: string
    }, callback: callbackFunc): void

    /** Check access token validity, scope, and associated clientID. */
    checkToken(data: {
        auth: string
    }, callback: callbackFunc): void
}

interface bitsInterface {

    /** Retrieves the list of available cheermotes, animated emotes to which viewers can assign bits, to cheer in chat. The cheermotes returned are available throughout Twitch, in all bits-enabled channels. */
    cheermotes(data: {
        channelID?: string
    }, callback: callbackFunc): void
}

interface feedInterface {

    /** Gets posts from a specified channel feed. */
    getPosts(data: {
        channelID: string
        auth?: string
        limit?: number
        cursor?: string
        comments?: number
    }, callback: callbackFunc): void

    /** Gets a specified post from a specified channel feed. */
    getPost(data: {
        channelID: string
        postID: string
        auth?: string
        comments?: number
    }, callback: callbackFunc): void

    /** Creates a post in a specified channel feed. */
    createPost(data: {
        auth: string
        channelID: string
        post: string
        share?: boolean
    }, callback: callbackFunc): void

    /** Deletes a specified post in a specified channel feed. */
    deletePost(data: {
        auth: string
        channelID: string
        postID: string
    }, callback: callbackFunc): void

    /** Creates a reaction to a specified post in a specified channel feed. The reaction is specified by an emote value, which is either an ID (for example, ???25??? is Kappa) or the string ???endorse??? (which corresponds to a default face emote) */
    createReaction(data: {
        auth: string
        channelID: string
        postID: string
        emoteID: string
    }, callback: callbackFunc): void

    /** Deletes a specified reaction to a specified post in a specified channel feed. The reaction is specified by an emote ID (for example, ???25??? is Kappa) or the string ???endorse??? (which corresponds to a default face emote). */
    deleteReaction(data: { 
        auth: string
        channelID: string
        postID: string
        emoteID: string
    }, callback: callbackFunc): void

    /** Gets all comments on a specified post in a specified channel feed. */
    getComments(data: {
        channelID: string
        postID: string
        auth?: string
        limit?: number
        cursor?: string
    }, callback: callbackFunc): void

    /** Creates a comment to a specified post in a specified channel feed. */
    createComment(data: {
        auth: string
        channelID: string
        postID: string
        comment: string
    }, callback: callbackFunc): void

    /** Deletes a specified comment on a specified post in a specified channel feed. */
    deleteComment(data: {
        auth: string
        channelID: string
        postID: string
        commentID: string
    }, callback: callbackFunc): void

    /** Creates a reaction to a specified comment on a specified post in a specified channel feed. The reaction is specified by an emote value, which is either an ID (for example, ???25??? is Kappa) or the string ???endorse??? (which corresponds to a default face emote). */
    createCommentReaction(data: {
        auth: string
        channelID: string
        postID: string
        commentID: string
        emoteID: string
    }, callback: callbackFunc): void

    /** Deletes a reaction to a specified comment on a specified post in a specified channel feed. The reaction is specified by an emote value, which is either an ID (for example, ???25??? is Kappa) or the string ???endorse??? (which corresponds to a default face emote). */
    deleteCommentReaction(data: {
        auth: string
        channelID: string
        postID: string
        commentID: string
        emoteID: string
    }, callback: callbackFunc): void
}

interface channelsInterface {

    /** Gets a channel object based on a specified OAuth token. */
    channel(data: {
        auth: string
    }, callback: callbackFunc): void

    /** Gets a specified channel object. */
    channelByID(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Updates specified properties of a specified channel. */
    updateChannel(data: {
        auth: string
        channelID: string
        status?: string
        game?: string
        delay?: string
        channel_feed_enabled?: boolean
    }, callback: callbackFunc): void

    /** Gets a list of users who are editors for a specified channel. */
    editors(data: {
        auth: string
        channelID: string
    }, callback: callbackFunc): void

    /** Gets a list of users who follow a specified channel, sorted by the date when they started following the channel (newest first, unless specified otherwise). */
    followers(data: {
        channelID: string
        limit?: number
        offset?: number
        cursor?: string
        direction?: "asc" | "desc"
    }, callback: callbackFunc): void

    /** Gets a list of teams to which a specified channel belongs. */
    teams(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Gets a list of users subscribed to a specified channel, sorted by the date when they subscribed. */
    subs(data: {
        auth: string
        channelID: string
        limit?: number
        offset?: number
        direction?: "asc" | "desc"
    }, callback: callbackFunc): void

    /** Checks if a specified channel has a specified user subscribed to it. Intended for use by channel owners. */
    checkSub(data: {
        auth: string
        channelID: string
        userID: string
    }, callback: callbackFunc): void

    /** Gets a list of videos from a specified channel. */
    videos(data: {
        channelID: string
        limit?: number
        offset?: number
        broadcast_type?: string
        language?: string
        sort?: "views" | "time"
    }, callback: callbackFunc): void

    /** Starts a commercial (advertisement) on a specified channel. This is valid only for channels that are Twitch partners. You cannot start a commercial more often than once every 8 minutes. */
    startAd(data: {
        auth: string
        channelID: string
        duration: 30 | 60 | 90 | 120 | 150 | 180
    }, callback: callbackFunc): void

    /** Deletes the stream key for a specified channel. Once it is deleted, the stream key is automatically reset. */
    resetStreamKey(data: {
        auth: string
        channelID: string
    }, callback: callbackFunc): void

    /** Gets the community for a specified channel. */
    getCommunity(data: {
        auth: string
        channelID: string
    }, callback: callbackFunc): void

    /** Sets a specified channel to be in a specified community. */
    setCOmmunity(data: {
        auth: string
        channelID: string
        communityID: string
    }, callback: callbackFunc): void

    /** Deletes a specified channel from its community. */
    leaveCommunity(data: {
        auth: string
        channelID: string
    }, callback: callbackFunc): void
}

interface chatInterface {
    
    /** Gets a list of badges that can be used in chat for a specified channel. */
    badges(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Gets all chat emoticons (not including their images) in one or more specified sets. Caution: When not specifying the emotesets parameter, this endpoint returns a large amount of data. */
    emoteSet(data: {
        emotesets?: string
    }, callback: callbackFunc): void

    /** Gets all chat emoticons (including their images). Caution: This endpoint returns a large amount of data. */
    emotes(data: {}, callback: callbackFunc): void

    /** Gets a list of chat rooms determined by if the auth token is a channel mod, sub, or normal user */
    rooms(data: {
      auth: string
      channelID: string
    }, callback: callbackFunc): void
}

interface clipsInterface {
    
    /** Gets details about a specified Clip. Clips are referenced by a randomly generated string called a slug. Every clip has a globally unique slug. */
    getClip(data: {
        channelName: string
        slug: string
    }, callback: callbackFunc): void
    
    /** Gets the top Clips which meet a specified set of parameters. */
    top(data: {
        channel?: string
        cursor?: string
        game?: string
        language?: string
        limit?: number
        period?: "day" | "week" | "month" | "all"
        trending?: boolean
    }, callback: callbackFunc): void

    /** Gets the top Clips for the games followed by a specified user, identified by an OAuth token. */
    followed(data: {
        auth: string
        cursor?: string
        limit?: number
        trending?: boolean
    }, callback: callbackFunc): void
}

interface collectionsInterface {
    
    /** Gets summary information about a specified collection. This does not return the collection items (videos). */
    getMetadata(data: {
        collectionID: string
    }, callback: callbackFunc): void

    /** Gets all items (videos) in a specified collection. For each video in the collection, this returns a collection item ID and other information. Collection item IDs are unique (only) within the collection. */
    getCollection(data: {
        collectionID: string
        include_all_items: boolean
    }, callback: callbackFunc): void

    /** Gets all collections owned by a specified channel. Collections are sorted by update date, with the most recently updated first. */
    getByChannel(data: {
        channelID: string
        limit?: number
        cursor?: string
        containing_item?: string
    }, callback: callbackFunc): void

    /** Creates a new collection owned by a specified channel. The user identified by the OAuth token must be the owner or an editor of the specified channel.  */
    create(data: {
        auth: string
        channelID: string
        title: string
    }, callback: callbackFunc): void

    /** Updates the title of a specified collection */
    update(data: {
        auth: string
        collectionID: string
        title: string
    }, callback: callbackFunc): void

    /** Adds the thumbnail of a specified collection item as the thumbnail for the specified collection. */
    createThumbnail(data: {
        auth: string
        collectionID: string
        itemID: string
    }, callback: callbackFunc): void

    /** Deletes a specified collection. */
    delete(data: {
        auth: string
        collectionID: string
    }, callback: callbackFunc): void

    /** Adds a specified video to a specified collection. */
    addItem(data: {
        auth: string
        collectionID: string
        videoID: string
    }, callback: callbackFunc): void

    /** Deletes a specified collection item from a specified collection, if it exists. */
    delItem(data: {
        auth: string
        collectionID: string
        itemID: string
    }, callback: callbackFunc): void

    /** Moves a specified collection item to a different position within a collection. */
    moveItem(data: {
        auth: string
        collectionID: string
        itemID: string
        position: string
    }, callback: callbackFunc): void
}

interface communitiesInterface {
    
    /** Gets a specified community. */
    getByName(data: {
        name: string
    }, callback: callbackFunc): void

    /** Gets a specified community. */
    getByID(data: {
        communityID: string
    }, callback: callbackFunc): void

    /** Updates a specified community. */
    update(data: {
        auth: string
        communityID: string
        summary?: string
        description?: string
        rules?: string
        email?: string
    }, callback: callbackFunc): void

    /** Gets the top communities by viewer count. */
    top(data: {
        limit?: number
        cursor?: string
    }, callback: callbackFunc): void

    /** Gets a list of banned users for a specified community. */
    bans(data: {
        auth: string
        communityID: string
        limit?: number
        cursor?: string
    }, callback: callbackFunc): void

    /** Adds a specified user to the ban list of a specified community. */
    addBan(data: {
        auth: string
        communityID: string
        userID: string
    }, callback: callbackFunc): void

    /** Deletes a specified user from the ban list of a specified community. */
    unban(data: {
        auth: string
        communityID: string
        userID: string
    }, callback: callbackFunc): void

    /** Adds a specified image as the avatar of a specified community. */
    createAvatar(data: {
        auth: string
        communityID: string
        avatar_image: string
    }, callback: callbackFunc): void

    /** Deletes the avatar image of a specified community. */
    deleteAvatar(data: {
        auth: string
        communityID: string
    }, callback: callbackFunc): void

    /** Adds a specified image as the cover image of a specified community. */
    createCover(data: {
        auth: string
        communityID: string
        cover_image: string
    }, callback: callbackFunc): void

    /** Deletes the cover image of a specified community. */
    deleteCover(data: {
        auth: string
        communityID: string
    }, callback: callbackFunc): void

    /** Gets a list of moderators of a specified community. */
    mods(data: {
        auth: string
        communityID: string
    }, callback: callbackFunc): void

    /** Adds a specified user to the list of moderators of a specified community. */
    addMod(data: {
        auth: string
        communityID: string
        userID: string
    }, callback: callbackFunc): void

    /** Deletes a specified user from the list of moderators of a specified community. */
    delMod(data: {
        auth: string
        communityID: string
        userID: string
    }, callback: callbackFunc): void

    /** Gets a list of actions users can perform in a specified community. */
    getPermissions(data: {
        auth: string
        communityID: string
    }, callback: callbackFunc): void

    /** Reports a specified channel for violating the rules of a specified community. */
    report(data: {
        channelID: string
        communityID: string
    }, callback: callbackFunc): void

    /** Gets a list of users who are timed out in a specified community. */
    timeouts(data: {
        auth: string
        communityID: string
        limit?: number
        cursor?: string
    }, callback: callbackFunc): void

    /** Adds a specified user to the timeout list of a specified community. */
    addTimeout(data: {
        auth: string
        communityID: string
        userID: string
        duration: number
        reason?: string
    }, callback: callbackFunc): void

    /** Deletes a specified user from the timeout list of a specified community. */
    delTimeout(data: {
        auth: string
        communityID: string
        userID: string
    }, callback: callbackFunc): void
}

interface gamesInterface {
    
    /** Gets games sorted by number of current viewers on Twitch, most popular first. */
    top(data: {
        limit?: number
        offset?: number
    }, callback: callbackFunc): void
}

interface ingestsInterface {
    
    /** Gets a list of Twitch ingest servers. */
    serverList(data: {}, callback: callbackFunc): void
}

interface searchInterface {
    
    /** Searches for channels based on a specified query parameter. */
    channels(data: {
        query: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Searches for games based on a specified query parameter. */
    games(data: {
        query: string
        live?: boolean
    }, callback: callbackFunc): void

    /** Searches for streams based on a specified query parameter. */
    streams(data: {
        query: string
        limit?: number
        offset?: number
        hls?: boolean
    }, callback: callbackFunc): void
}

interface streamsInterface {
    
    /** Gets stream information (the stream object) for a specified user. */
    channel(data: {
        channelID: string
        stream_type?: "live" | "playlist" | "all"
    }, callback: callbackFunc): void

    /** Gets a list of live streams. */
    live(data: {
        channel?: string
        game?: string
        language?: string
        stream_type?: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Gets a summary of live streams. */
    summary(data: {
        game?: string
    }, callback: callbackFunc): void

    /** Gets a list of all featured live streams. */
    featured(data: {
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Gets a list of online streams a user is following, based on a specified OAuth token. */
    followed(data: {
        auth: string
        limit?: number
        offset?: number
        stream_type?: "live" | "playlist" | "all"
    }, callback: callbackFunc): void
}

interface teamsInterface {
    
    /** Gets all active teams. */
    getAll(data: {
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Gets a specified team object. */
    getTeam(data: {
        team: string
    }, callback: callbackFunc): void
}

interface usersInterface {
    
    /** Gets a user object based on the OAuth token provided. */
    user(data: {
        auth: string
    }, callback: callbackFunc): void

    /** Gets a specified user object. */
    userByID(data: {
        userID: string
    }, callback: callbackFunc): void

    /** Gets multiple users from an array of usernames */
    usersByName(data: {
        users: string | string[]
    }, callback: callbackFunc): void

    /** Gets a list of the emojis and emoticons that the specified user can use in chat. These are both the globally available ones and the channel-specific ones (which can be accessed by any user subscribed to the channel). */
    userEmotes(data: {
        auth: string
        userID: string
    }, callback: callbackFunc): void

    /** Checks if a specified user is subscribed to a specified channel. */
    checkSub(data: {
        auth: string
        userID: string
        channelID: string
    }, callback: callbackFunc): void

    /** Gets a list of all channels followed by a specified user, sorted by the date when they started following each channel. */
    follows(data: {
        userID: string
        limit?: number
        offset?: number
        direction?: "asc" | "desc"
        sortby?: "created_at" | "last_broadcast" | "login"
    }, callback: callbackFunc): void

    /** Checks if a specified user follows a specified channel. If the user is following the channel, a follow object is returned. */
    checkFollow(data: {
        userID: string
        channelID: string
    }, callback: callbackFunc): void

    /** Adds a specified user to the followers of a specified channel. */
    followChannel(data: {
        auth: string
        userID: string
        channelID: string
        notifications?: boolean
    }, callback: callbackFunc): void

    /** Deletes a specified user from the followers of a specified channel. */
    unfollowChannel(data: {
        auth: string
        userID: string
        channelID: string
    }, callback: callbackFunc): void

    /** Gets a user???s block list. List sorted by recency, newest first. */
    blockList(data: {
        auth: string
        userID: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Blocks a user; that is, adds a specified target user to the blocks list of a specified source user. */
    blockUser(data: {
        auth: string
        sourceUserID: string
        targetUserID: string
    }, callback: callbackFunc): void

    /** Unblocks a user; that is, deletes a specified target user from the blocks list of a specified source user. */
    unblockUser(data: {
        auth: string
        sourceUserID: string
        targetUserID: string
    }, callback: callbackFunc): void
    
    /** Creates a connection between a user (an authenticated Twitch user, linked to a game user) and VHS, and starts returning the user???s VHS data in each heartbeat. The game user is specified by a required identifier parameter. */
    createVHS(data: {
        auth: string
        identifier: string
    }, callback: callbackFunc): void

    /** Checks whether an authenticated Twitch user is connected to VHS. If a connection to the service exists for the specified user, the linked game user???s ID is returned; otherwise, an HTTP 404 response is returned. */
    checkVHS(data: {
        auth: string
    }, callback: callbackFunc): void

    /** Deletes the connection between an authenticated Twitch user and VHS. */
    deleteVHS(data: {
        auth: string
    }, callback: callbackFunc): void
}

interface videosInterface {
    
    /** Gets a specified video object. */
    getVideo(data: {
        videoID: string
    }, callback: callbackFunc): void

    /** Gets the top videos based on viewcount, optionally filtered by game or time period. */
    top(data: {
        limit?: number
        offset?: number
        game?: string
        period?: "week" | "month" | "all"
        broadcast_type?: string
        language?: string
        sort?: "time" | "views"

    }, callback: callbackFunc): void

    /** Gets the videos from channels followed by a user, based on a specified OAuth token. */
    followed(data: {
        auth: string
        limit?: number
        offset?: number
        broadcast_type?: string
        language?: string
        sort?: "time" | "views"
    }, callback: callbackFunc): void

    /** Creates a new video in a specified channel. Videos with the following formats can be uploaded: MP4 file format, AAC audio, h264 codec, Up to 10Mbps bitrate, Up to 1080p/60FPS */
    create(data: {
        auth: string
        channelID: string
        title: string
        description?: string
        game?: string
        language?: string
        tag_list?: string
    }, callback: callbackFunc): void

    /** Uploads part of a video. Each part of a video is uploaded with a separate request. Each video part except the last part must be at least 5 MB and at most 25 MB. The total of all parts cannot exceed 10 GB. */
    upload(data: {
        "content-length":  string
        videoData: number
        videoID: string
        part: number
        token: string
    }, callback: callbackFunc): void
    
    /** After you upload all the parts of a video, you complete the upload process with this endpoint. */
    complete(data: {
        videoID: string
        token: string
    }, callback: callbackFunc): void

    /** Updates information about a specified video that was already created. */
    update(data: {
        auth: string
        videoID: string
        description?: string
        game?: string
        language?: string
        tag_list?: string
        title?: string
    }, callback: callbackFunc): void

    /** Deletes a specified video. */
    delete(data: {
        auth: string
        videoID: string
    }, callback: callbackFunc): void
}

interface otherInterface {
    
    /** Get list of users currently in a channels chat */
    chatters(data: {
        channelName: string
    }, callback: callbackFunc): void

    /** Get channels that are hosting the specified channelID */
    hosts(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Get who the specified channelID is hosting */
    hosting(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Get who a user is subbed to */
    subsTo(data: {
        auth: string
        channelName: string
    }, callback: callbackFunc): void
    
    /** Get random stream */
    randomStream(data: {}, callback: callbackFunc): void

    /** Provides user data not returned in the documented endpoint */
    getUser(data: {
        channelName: string
    }, callback: callbackFunc): void

    /** Get chat settings */
    chatProperties(data: {
        channelName: string
    }, callback: callbackFunc): void

    /** Get channel subscription program details */
    product(data: {
        channelName: string
    }, callback: callbackFunc): void

    /** Get channel panel information */
    panels(data: {
        channelName: string
    }, callback: callbackFunc): void

    /** Get info on currently running playlist */
    playlist(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Followed channels that are hosting someone else */
    followedHosting(data: {
        channelName: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Get games that a user follows */
    followedGames(data: {
        channelName: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Get live games that a user follows */
    followedGamesLive(data: {
        channelName: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Check if a user follows a game */
    checkFollowGame(data: {
        channelName: string
        game: string
        limit?: number
        offset?: number
    }, callback: callbackFunc): void

    /** Get global chat badges */
    badges(data: {}, callback: callbackFunc): void

    /** Get sub chat badges */
    subBadges(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Get recent chat history for a channel */
    recentChat(data: {
        channelID: string
    }, callback: callbackFunc): void

    /** Get streams data with extra counter-strike information */
    cs(data: {}, callback: callbackFunc): void

    /** Get data about cs maps being played on streams */
    csMaps(data: {}, callback: callbackFunc): void
}
