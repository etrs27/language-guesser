import {franc, francAll} from 'franc';
import langs from "langs";
import colors from "colors";

const args = process.argv.slice(2);
const langText = franc(`${args}`, {minLength: 5});
const langName = (langs.where("3", langText));

if (langText === 'und' || langText.length >= 5){
    console.log("I could not recognize that language. Please try a new phase that is longer than five characters.".red)
} else {
    console.log(`Our best guess is: ${langName.name.green}`)
}