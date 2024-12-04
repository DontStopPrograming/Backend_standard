// import { Router } from "express"

// import auth from "./auth"
// import items from "./items"
// import order from "./order"

// export const router = Router()

// router.use('/auth', auth)
// router.use('/items', items)
// router.use('/order', order)

// export default router

import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 *
 * @returns
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };