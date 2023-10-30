import mun_sivut from "./views/mun_sivut.js"
import galleria from "./views/galleria.js"
import yhteystiedot from "./views/yhteystiedot.js"
import tilastot from "./views/tilastot.js"
import uutiset from "./views/uutiset.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: mun_sivut },
        { path: "/visa", view: uutiset },
        { path: "/galleria", view: galleria },
        { path: "/yhteystiedot", view: yhteystiedot },
        { path: "/tilastot", view: tilastot },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};


window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});