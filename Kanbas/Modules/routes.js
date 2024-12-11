import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
app.put("/api/modules/:moduleId", async (req, res) => {
  const { moduleId } = req.params;
  const moduleUpdates = req.body;
  const status = await modulesDao.updateModule(moduleId, moduleUpdates);
  console.log("in module route", moduleUpdates)
  res.send(status);
});

 app.delete("/api/modules/:moduleId", async (req, res) => {
   const { moduleId } = req.params;
   const status = await modulesDao.deleteModule(moduleId);
   res.send(status);
 });
}

//await