import { GuiController } from "./GuiController.js";

export class AppController {
    constructor() {
        this.guiCtrl = new GuiController();
    }

    setGuiController(guiCtrlInstance) {
        this.guiCtrl = guiCtrlInstance;
    }
}
