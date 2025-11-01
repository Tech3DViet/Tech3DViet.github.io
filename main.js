/// import * as Autodesk from "@types/forge-viewer";
var viewer;
Autodesk.Viewing.Initializer({ accessToken: '' }, async function () {
    viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('preview'));
    viewer.start();
    viewer.setTheme('light-theme');
    await viewer.loadExtension('Autodesk.glTF');
    await viewer.loadExtension('Autodesk.PDF');
    viewer.loadModel('models/rac_basic_sample_project/gltf/model.gltf');
    //viewer.loadModel('models/rac_basic_sample_project/glTF/model.gltf');
});
function loadModel(url) {
    if (viewer.model) {
        viewer.unloadModel(viewer.model);
    }
    viewer.loadModel(url);
}