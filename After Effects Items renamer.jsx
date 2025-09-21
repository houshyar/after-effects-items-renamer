{
    app.beginUndoGroup("Dynamic Find & Replace in Names");

    // Prompt user for find and replace strings
    var findText = prompt("Enter text to find in names:", " ");
    if (findText === null || findText === "") {
        alert("Find text is required. Operation cancelled.");
        app.endUndoGroup();
    } else {
        var replaceText = prompt("Enter replacement text:", " ");
        if (replaceText === null) {
            alert("Operation cancelled.");
            app.endUndoGroup();
        } else {

            function renameInFolder(folder) {
                // Rename the folder itself
                if (folder.name.indexOf(findText) !== -1) {
                    folder.name = folder.name.replace(new RegExp(findText, "g"), replaceText);
                }

                // Get a stable list of children
                var children = [];
                for (var i = 1; i <= app.project.numItems; i++) {
                    var item = app.project.item(i);
                    if (item.parentFolder === folder) {
                        children.push(item);
                    }
                }

                // Rename children and recurse into subfolders
                for (var j = 0; j < children.length; j++) {
                    var item = children[j];

                    if (item.name.indexOf(findText) !== -1) {
                        item.name = item.name.replace(new RegExp(findText, "g"), replaceText);
                    }

                    if (item instanceof FolderItem) {
                        renameInFolder(item);
                    }
                }
            }

            // Make sure one folder is selected
            var selectedItems = app.project.selection;
            if (selectedItems.length !== 1 || !(selectedItems[0] instanceof FolderItem)) {
                alert("Please select one folder in the Project panel.");
            } else {
                renameInFolder(selectedItems[0]);
                alert("Renamed all occurrences of '" + findText + "' to '" + replaceText + "'.");
            }

            app.endUndoGroup();
        }
    }
}
