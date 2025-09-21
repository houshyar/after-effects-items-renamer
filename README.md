# After Effects Items Renamer

A lightweight Adobe After Effects ExtendScript (`.jsx`) that allows you to batch rename project items and folders with a dynamic find-and-replace. Perfect for quickly cleaning up or restructuring project names.

## Features
- Prompt-based find and replace workflow.
- Renames:
  - The selected folder.
  - All items inside it (comps, footage, solids, etc.).
  - Subfolders (recursively).
- Undo support — one click to revert the whole operation.
- Simple alerts for confirmation and errors.

## Usage
1. Open your After Effects project.
2. In the **Project panel**, select **one folder** that you want to process.
3. Run the script:
   - Go to **File > Scripts > Run Script File...**
   - Select `After Effects Items Renamer.jsx`.
4. Enter:
   - The text you want to **find**.
   - The text you want to **replace** it with.
5. The script will rename the selected folder, all its contents, and subfolders.

## Example
Before running:

📂 Scenes_Final

├─ Scene01_Final

├─ Scene02_Final

└─ 📂 Precomps_Final

└─ BG_Final

Find: `Final`  
Replace: `v2`

After running:

📂 Scenes_v2

├─ Scene01_v2

├─ Scene02_v2

└─ 📂 Precomps_v2

└─ BG_v2

## Requirements
- Adobe After Effects (tested on CC and newer).
- Basic familiarity with running `.jsx` scripts in After Effects.

## License
This project is licensed under the [MIT License](LICENSE).
