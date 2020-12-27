import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import _ from "lodash";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let posts: Array<{}> = [];

interface Post {
  title: string,
  content: string,
  category: string,
  kebabTitle: string,
}

//// ROUTES ////

app.get("/", (req, res) => {
  if (posts.length === 0) res.render("home-empty");
  else res.render("home", {
    posts: posts,
  });
});

app.get("/posts/:postName", (req, res) => {
  posts.forEach((post: any) => {
    if (_.kebabCase(post.title) === _.kebabCase(req.params.postName)) {
      res.render("post", {title: post.title, content: post.content, category: post.category});
    };
  });
});

app.route("/compose")
  .get((req, res) => {
    res.render("compose");
  })
  .post((req, res) => {
    const post: Post = {
      title: req.body.postTitle,
      content: req.body.postContent,
      category: req.body.postCategory,
      kebabTitle: _.kebabCase(req.body.postTitle)
    }
    if ((post.category.length !==0) && (post.content.length !== 0) && (post.category.length !== 0)) {
      posts.push(post);
      res.redirect("/");
    } else {
      res.redirect("/compose");
    }
  })


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});