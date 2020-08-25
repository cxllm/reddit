# @cxllm/reddit
This package aims to make using reddit's api easier for the average user. It includes a package which is used in code, and a cli to be used in the command line
It can be used in both js and ts
## Installing
### Package
`npm i @cxllm/reddit`
### CLI
`npm i -g @cxllm/reddit`
## Package documentation
The package currently has 5 methods, 4 of which work in the same way and return the same data format
### Importing/Requiring:
Importing/Requring the package is easy, and you can pull specific methods also
#### Import all methods:
```js
const Reddit = require("@cxllm/reddit");
```

```ts
import Reddit from "@cxllm/reddit";
```
#### Import specific methods:
```js
const {random, top, rising, newPost} = require("@cxllm/reddit") //in this context, "newPost" must be used as new collides with the constructor
```

```ts
import {random, top, rising, newPost} from "@cxllm/reddit";
```

### Methods:
I am going to group 4 methods into one in this documentation as they all return the same data and all work in the same way
#### random, top, rising and new/newPost:
All the methods **must** be treated as async (await or .then) as they make web requested
In this example, I will use r/memes as my subreddit:
```js
const sub = "memes" //you can also use r/memes as it slices it in the function
(async () => {
    try {
        await Reddit.random(sub) //fetches a random post from r/memes
        await Reddit.top(sub) //fetches a random top post from r/memes
        await Reddit.new(sub) //fetches a random new post from r/memes
        await Reddit.newPost(sub) //same as above
        await Reddit.rising(sub) //fetches a random rising post from r/memes
    } catch { //catches the error if a subreddit doesn't exist
        console.log("Subreddit does not exist")
    }
})()
```
All these methods return the data format below with different data: 
```js
{
  upvotes: 894,
  downvotes: 0,
  author: 'adithya17',
  title: '*Soviet Union anthem intensifies*',
  url: 'https://reddit.com/r/memes/comments/ig7e97/soviet_union_anthem_intensifies/',
  subreddit: 'memes',
  image: 'https://i.redd.it/t6zd3k9tn3j51.jpg',
  score: 894,
  edited: false,
  nsfw: false,
  video: false,
  created: 2020-08-25T15:19:25.000Z
}
```
The "created" parameter is an instance of the Date class
If the subreddit does not exist, an error is thrown
#### exists 
In this package, I have included an exists method to tell you if a subreddit exists or not.
This method **must** be treated as an async (await, .then) as it is making web requests
Below is an example of usage
```js
(async () => {
    await Reddit.exists("memes") //true
    await Reddit.exists("iwjfiahfksdagukashgiaerjgkaeflaguaksgyguskfpok") //false
})()
```

## CLI documentation
The cli is very simple and easy to use, and it can be called from `reddit`
`reddit help` shows all the commands and how to use them
`reddit new <subreddit>` gets a random new post from a subreddit
`reddit rising <subreddit>` gets a random rising post from a subreddit 
`reddit top <subreddit>` gets a random top post from a subreddit
`reddit random <subreddit>` gets a random post from a subreddit
and that's currently all it has to offer. It will let you know if you have entered an invalid subreddit

I hope this package aids you in using reddit's api
# [Support Server](https://discord.com/invite/XVxhVvG)