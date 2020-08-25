import random from "./methods/random";
import newPost from "./methods/new";
import top from "./methods/top";
import exists from "./methods/exists";
import rising from "./methods/rising";
declare class Reddit {
    random: typeof random;
    new: typeof newPost;
    newPost: typeof newPost;
    top: typeof top;
    rising: typeof rising;
    exists: typeof exists;
}
declare const _default: Reddit;
export = _default;
