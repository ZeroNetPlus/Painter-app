class Page extends ZeroFrame {
    onRequest(cmd, message) {
        console.log("ZN-F request", cmd, message);
    }

    setSiteInfo(site_info) {
        document.getElementById("siteinfo").innerHTML =
            "Page address: " + site_info.address +
            "<br>- Peers: " + site_info.peers +
            "<br>- Size: " + site_info.settings.size +
            "<br>- Modified: " + (new Date(site_info.content.modified * 1000));
    }

    onOpenWebsocket() {
        this.cmd("siteInfo", [], function(site_info) {
            page.site_info = site_info;
        });
    }
}
page = new Page();
console.log("page ready!");