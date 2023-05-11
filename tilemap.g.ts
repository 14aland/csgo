// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030101010101010101010101010103030301010101040401010101010101030303000101010404030303000001010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020000000000000000000005000000010105050505050505050505050505050505`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.skillmap.islandTile3,sprites.vehicle.roadVertical,sprites.skillmap.islandTile6], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`10001000010808080808080808080808080808080209090907070707070a0907070707030207070707070707070707070907070302070707070707070707070707070703020709070707070707070707070707030207090707070709090707070907070302070707070707070907070709070707020707070707070707090707090707070207070707070707070907070907070702070907070707070707070709070707020709070709070707070707090907030207070709090707070907070709070302070707070707070709070709090703020707070707070907070707090707030207070707070907070707070707070305060606060607070706060606060604`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 . . . . . 2 2 . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . 2 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . . . . . . 2 . . 2 . . . 
. . . . . . . . . 2 . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . 2 . . . . . . 2 2 . . 
. . . . 2 2 . . . 2 . . . 2 . . 
. . . . . . . . . 2 . . 2 2 . . 
. . . . . . . 2 . . . . 2 . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles14,sprites.builtin.forestTiles10,sprites.builtin.forestTiles6,sprites.builtin.forestTiles2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
