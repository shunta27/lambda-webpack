// import AWS from "aws-sdk";

console.log('starting function');

export default ((e, ctx) => {
    const response = new Response();
    response.body = JSON.stringify({
        event: e,
        context: ctx
    });
    ctx.done(null, response);
});

class Response {
    constructor() {
        this.statusCode = 200;
        this.headers = {
            'Access-Control-Allow-Origin' : '*'
        };
        this.body = "";
    }
}
