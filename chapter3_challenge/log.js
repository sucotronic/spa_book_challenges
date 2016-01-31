var log = (function(){
    function print(s,color) {
        console.log("%c"+s, "color:"+color);
    }
    function debug(s) {
        print(s,"black");
    }
    function info(s) {
        print(s,"green");
    }
    function warning(s){
        print(s,"orange");
    }
    function error(s) {
        print(s,"red");
    }
    return {
        debug: debug,
        info: info,
        warning: warning,
        error: error
    }
})();
log.debug("debug");
log.info("info");
log.warning("warning");
log.error("error");