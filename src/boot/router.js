import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { 
        path: "/", 
        component: () => import("../layout/home.vue"),
        children: [
            {
                path: "", 
                name: "home", 
                component: () => import("../view/home.vue"),
            }
        ]
    },
    { 
        path: "/", 
        component: () => import("../layout/default.vue"),
        children: [
            {
                path: "auction", 
                name: "auction", 
                component: () => import("../view/auction.vue"),
                children: [
                    {
                        path: "live", 
                        name: "live", 
                        component: () => import("../view/Upcoming.vue"),
                    },
                    {
                        path: "newEntry", 
                        name: "newEntry", 
                        component: () => import("../view/components/auction/new-entry.vue"),
                    },
                    {
                        path: "bidderList", 
                        name: "bidderList", 
                        component: () => import("../view/components/auction/bidder-list.vue"),
                    },
                    {
                        path: "allAuction", 
                        name: "allAuction", 
                        component: () => import("../view/components/auction/all-auctions.vue"),
                    },
                    {
                        path: "edit/:id", 
                        name: "edit", 
                        component: () => import("../view/components/auction/edit.vue"),
                    },
                    {
                        path: "bidding/:id", 
                        name: "bidding", 
                        component: () => import("../view/components/auction/bidding.vue"),
                    },
                    
                ]
            },
            
        ]
    },
    { 
        path: "/", 
        component: () => import("../layout/default.vue"),
        children: [
            {
                path: "login", 
                name: "login", 
                component: () => import("../view/login.vue"),
            }
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
