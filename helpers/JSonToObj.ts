/** Reusable utilities: TBD */


export class JsonToObj {
    
        constructor() {
          console.log('hello world');
        }

        args: {};
        data: "";
        files: {};
        form: {
          someHash: "7654321",
          secondHash: "987654321asdfgh"
        };

        headers: {
          xforwardedproto: "https",
          host: "postman-echo.com",
          contentlength: "43",
          accept: "*/*",
          acceptencoding: "gzip, deflate",
          cachecontrol: "no-cache",
          contenttype: "application/x-www-form-urlencoded",
          cookie: "sails.sid=s%3AUuE9kqyAFxbvBvvH8aX3WEBLXiNgjK7-.ErzxoeVFY7HfTK%2BPjoOs%2BzaP3yU8%2BcM59adz0oo9LlA",
          postmantoken: "e6a118ae-af47-4fb6-ac35-3cf2bcbafd00",
          useragent: "PostmanRuntime/7.3.0",
          xforwardedport: "443"
        };

        json: {
          someHash: "7654321",
          secondHash: "987654321asdfgh"
        };
        url: "https://postman-echo.com/post"

        print() :void {
          console.log(this.json);
        }
}


