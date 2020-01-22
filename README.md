# Receipt To Moon

An open source project for comparing length of paper receipts from popular brands and shops.

![](https://media.giphy.com/media/xUA7bjdC39c0Ut7xN6/giphy.gif)

### Project
```
Folder structure
|- docs 
    |- index.html
    |- style
        |- style.scss
        |- style.css (auto generated)
    |- js
        |- load_list_from_json.js
        |- copy_to_clip.js
    |- json
        |- list.json (contribution) 

/docs folder is used by the github pages for webpage.
```
### Contribution
- Any form of contribution is accepted and appreciated for the project, may it be documentation, code changes or .json list edit

#### How to add item in the list.
```
file:list.json
...
"List": [
    {
        "name":"CVS",
        "size":"7.5"
    }
...
```
- `List` int the list.json element holds an array of objects.
- These objects represent each item in the list
- To add new item in the list
    - add `,` after the last item's `}` parenthesis
    - add { "name":<> , "size":<> } with data after the newly added `,`
- Size of the receipts are measured in `feet`
- The count to the moon should not be changed while making changes to the list.json file
- Make sure the sizes are in descending order and the names are alphabetically ordered.
    - Order of the size precedes the order of the name.
    - For instance CVS with size 7 comes before Apple with size 3
- follow these steps
    - `git add docs/json/list.json`
    - `git commit -m "Added <>name with <>size`
    - `git push`


- Happy Shopping!!

![](https://media.giphy.com/media/PL2LZxMviOCly/giphy.gif)