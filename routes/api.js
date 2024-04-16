import express from "express";
import bodyParser from "body-parser";
import * as TestController from "../controllers/TestController.js";
import * as FsController from "../controllers/FsController.js"
import * as OsController from "../controllers/OsController.js";
import * as UrlController from "../controllers/UrlController.js";
import * as CrudController from "../controllers/CrudController.js";

const apiRouter = express.Router();

apiRouter.get("/", TestController.test);
apiRouter.get("/totalmem", OsController.getTotalMemory);
apiRouter.get("/freemem", OsController.getFreeMemory);
apiRouter.get("/cpus", OsController.getCPUs);
apiRouter.get("/readfile", FsController.readFile);
apiRouter.get("/readfilesync", FsController.readFileSync);
apiRouter.get("/writefile", FsController.writeFile);
apiRouter.get("/writefilesync", FsController.writeFileSync);
apiRouter.get("/appendfile", FsController.appendFile);
apiRouter.get("/appendfilesync", FsController.appendFileSync);
apiRouter.get("/rename", FsController.renameFile);
apiRouter.get("/urlparse", UrlController.parseUrl);
apiRouter.use(bodyParser.json());
apiRouter.use(express.urlencoded({extended: false})); //helps to add form data to body
apiRouter.post("/api/users", CrudController.addUsers);
apiRouter.get("/api/users/:id",CrudController.getUsers);
apiRouter.get("/api/users", CrudController.displayUsers);
apiRouter.put("/api/users/:id", CrudController.updateUsers);
apiRouter.delete("/api/users/:id", CrudController.deleteUsers);

export default apiRouter;








