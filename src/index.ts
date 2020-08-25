// importing methods
import random from "./methods/random";
import newPost from "./methods/new";
import top from "./methods/top"
import exists from "./methods/exists";
import rising from "./methods/rising"


class Reddit {
    public random = random;
    public new = newPost;
    public newPost = newPost; //Alias because the of the "new" keyword
    public top = top;
    public rising = rising;
    public exists = exists;
}
export = new Reddit();