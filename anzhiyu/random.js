var posts=["2025/04/07/hello-world/","2025/04/09/平衡车学习day1/","2025/04/11/平衡车学习day2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };