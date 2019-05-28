import {BlockDetailsPalette} from "../lib/BlockDetailsPalette";
import {BlockDetails} from "../lib/BlockDetails";

it("BlockDetails is undefined because of circular reference!", ()=>{
    expect(()=>{(new BlockDetails).debug()}).toThrow("_1.BlockDetailsPalette is not a constructor");
    (new BlockDetailsPalette).debug();
});

