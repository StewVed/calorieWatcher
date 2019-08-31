var foodList = [
  [0, 'Apple (any)', 53, 100, 'g']
, [1, 'Banana', 89, 100, 'g']
, [2, 'Nescafe Gold Mocha Coffee', 95, 1, 'cup']
, [3, 'Tesco Onion Rings Snacks', 500, 100, 'g']
, [4, 'Greek Yoghurt (Strawberry)', 96, 1, 'pot']
, [5, 'Mars Bar', 230, 1, '51g bar']
, [6, 'Tesco Rice Cakes Salt And Vinegar', 47, 1, 'cake']
, [7, 'Space Raiders (Beef)', 58, 1, ' 11.8g pack']
, [8, 'Bread', 103, 1, 'slice']
, [9, 'Utterly Butterly', 452, 100, 'g']
, [10, 'Tomato (any)', 20, 100, 'g']
, [11, 'Salad Cream (light)', 218, 100, 'g']
, [12, 'Museli', 352, 100, 'g']
, [13, 'Milk - Full Cream', 64, 100, 'g']
, [14, 'Snack A Jacks Jumbo Chocolate Chip Rice Cakes', 62, 1, 'cake']
, [15, 'Options Instant Belgian Chocolate', 40, 11, 'g']
, [16, 'Tesco Popcorn Sweet', 490, 100, 'g']
, [17, 'Fab Ice Lolly', 82, 1, 'lolly']
, [18, 'British White Potato', 80, 100, 'g']
, [19, 'Fish Fingers', 122, 2, 'finger']
, [30, 'Heinz Baked Beans', 78, 100, 'g']
, [31, 'Walkers Wotsits Cheese ', 90, 1, ' 16.5g pack']
, [32, 'Seriously Cheese', 416, 100, 'g']
, [33, 'Brunswick Ham', 15, 1, 'slice']
, [34, 'pickle', 159, 100, 'g']
, [35, 'Strawberry Jam', 247, 100, 'g']
, [36, 'Smarties Ice Cream', 118, 1, 'cone']
, [37, 'Tesco Californian Seedless Raisins', 293, 100, 'g']
, [38, 'Tesco Rocket Lolli', 39, 1, 'lolly']
, [39, 'Pickled Onions', 48, 100, 'g']
, [40, 'Penne Pasta', 360, 100, 'g']
, [41, 'Onion', 41, 100, 'g']
, [42, 'Nutella', 546, 100, 'g']
, [43, 'Peanut Butter', 672, 100, 'g']
, [44, 'Tesco Mini Milk', 42, 1, 'lolly']
, [45, 'Tesco Mini Roll', 117, 1, 'roll']
, [46, 'KitKat', 107, 1, 'bar']
, [47, 'Kelloggs Coco Pops', 387, 100, 'g']
, [48, 'Dairylea Dunker Ritz', 118, 1, ' 46g pack']
, [49, 'Yo Yo (any)', 27, 1, ' yoyo']
, [50, 'Grapes (any)', 66, 100, 'g']
, [51, 'Tesco Prawn Shells Pack', 76, 1, ' 14.4g Pack']
, [52, 'Tesco Prawn Shells loose', 531, 100, 'g']
, [53, 'Tesco Strawbery Yoghurt Pouch', 70, 1, ' 80g pouch']
, [54, 'Peppa Pig Raisins', 47, 1, ' 14g Pack']
, [55, 'Kiwi Fruit', 55, 100, 'g']
, [56, 'Pineapple Chunks ', 46, 100, 'g']
, [57, 'Tesco Soft Apricots', 219, 100, 'g']
, [58, 'Tesco Maris Piper Potatoes ', 81, 100, 'g']
, [59, 'Onions (any)', 41, 100, 'g']
, [60, 'Carrots', 42, 100, 'g']
, [61, 'Swede', 54, 100, 'g']
, [62, 'Cauliflower', 38, 100, 'g']
, [63, 'Savoy Cabbage', 32, 100, 'g']
, [64, 'Runner Beans', 29, 100, 'g']
, [65, 'Iceberg Lettuce', 14, 100, 'g']
, [66, 'Lambs Lettuce', 15, 100, 'g']
, [67, 'Cucumber', 11, 100, 'g']
, [68, 'Chives', 42, 100, 'g']
, [69, 'Mint', 67, 100, 'g']
, [70, 'Nesquik Snack (Chocolate Flavour)', 457, 1, ' 104g bar']
, [71, 'Willow Original Spread', 71, 100, 'g']
, [72, 'Clover Spread', 592, 100, 'g']
, [73, 'Tesco Everyday Value Lard ', 898, 100, 'g']
, [74, 'Large Free Range Eggs', 78, 1, ' 68g egg']
, [75, 'Philadelphia Light (Garlic & Herb) ', 620, 100, 'g']
, [76, 'Cathedral City Mature Cheddar Cheese', 416, 100, 'g']
, [77, 'Dairylea Dunkers (Breadsticks)', 111, 1, ' 47g pack']
, [78, 'Dairylea Cheese Spread', 211, 100, 'g']
, [79, 'Dairylea Cheese Triangles ', 35, 1, ' 15.63g triangle']
, [80, 'Tesco Half Fat Italian Mozzarella', 164, 100, 'g']
, [81, 'Tesco Red Leicester Cheese', 411, 100, 'g']
, [82, 'Light And Free Strawberry Greek Yoghurt', 58, 1, ' 115g pot']
, [83, 'Tesco 0% Fat Strawberry Peach Apricot Greek Yoghurt ', 96, 1, ' 150g pot']
, [84, 'Frubes Strawberry Yoghurt', 36, 1, ' 40g tube']
, [85, 'Tesco Goodness Strawberry Raspberry Yoghurt Pouch', 7, 1, ' 80g pouch']
, [86, 'Petits Filous Fromage Frais (any)', 75, 1, ' 85g pot']
, [87, 'Cadbury Dairy Milk Pots Of Joy', 160, 1, ' 70g pot']
, [88, 'Chicken Breast ', 164, 100, 'g cooked']
, [89, 'Reduced Fat Pork Sausages', 45, 1, ' Sausage']
, [90, 'Tesco Thin Cut Pork Loin Steaks', 225, 100, 'g']
, [91, 'Tesco Unsmoked Bacon Medallions', 191, 100, 'g cooked']
, [92, 'Tesco Unsmoked Back Bacon Rashers', 180, 100, 'g raw']
, [93, 'Tesco Beef Lean Steak Mince 5% Fat', 124, 100, 'g raw']
, [94, 'Richmond Thick Pork Sausages', 125, 100, ' 49g sausage']
, [95, 'Tesco British Crumbed Ham Slices', 29, 100, ' 26g slice']
, [96, 'Tesco W/T Honey Roast Ham Slices', 29, 100, ' 24g slice']
, [97, 'Tesco Cooked Smoked Bacon Strips', 450, 100, 'g']
, [98, 'Tesco Pizza Pepperoni slices', 494, 100, 'g']
, [99, 'Peperami Original Mini Salami', 40, 1, ' 10g stick']
, [100, 'Tesco Egg Mayonnaise Sandwich Filler', 199, 100, 'g']
, [101, 'Tesco Cheese And Onion Sandwich Filler', 330, 100, 'g']
, [102, 'Tesco 6 Mini Pork And Pickle Pork Pies', 183, 1, ' 50g pie']
, [103, 'Ginsters Extra Large Cornish Pasty', 707, 1, ' 284g pasty']
, [104, 'Ginsters Original Cornish Pasty', 566, 1, ' 227g pasty']
, [105, 'Tesco Tomato And Basil Sauce', 47, 100, 'g']
, [106, 'Tesco Cheese Sauce', 111, 100, 'g']
, [107, 'Tesco Garlic Baguette', 350, 100, 'g']
, [108, 'Tesco Italian Kitchen Beef Lasagne', 528, 1, ' 370g quarter']
, [109, 'Rustlers Cheeseburger', 424, 100, ' 162g burger']
, [110, 'Rustlers Quarter Pounder Cheese Burger', 505, 1, ' 190g burger']
, [111, 'Tesco Tiger Bloomer', 266, 100, 'g']
, [112, 'Warburtons Farmhouse White Bread', 104, 1, ' 42.7g slice']
, [113, 'Tesco Crusty White Rolls', 276, 100, 'g']
, [114, 'Tesco Hot Dog Rolls', 250, 100, 'g']
, [115, 'Mission Deli Original Wraps', 185, 1, ' wrap']
, [116, 'Tesco White Tortilla Wraps', 182, 100, ' 64g wrap']
, [117, 'Tesco Double Chocolate Mini Rolls', 117, 1, ' roll']
, [118, 'Heinz Baked Beans In Tomato Sauce', 78, 100, 'g']
, [119, 'Heinz Baked Beans With Pork Sausages In Tomato Sauce ', 96, 100, 'g']
, [120, 'Uncle Bens Rice Time Sweet And Sour', 338, 1, ' pot']
, [121, 'Pot Noodle King Chicken And Mushroom', 547, 1, ' pot']
, [122, 'Pot Noodle King Original Curry', 558, 1, ' pot']
, [123, 'Batchelors Super Noodles Chicken', 568, 1, ' pack']
, [124, 'Tesco Spaghetti Rings Sausages In Tomato Sauce ', 96, 100, 'g']
, [125, 'Heinz Ravioli In Tomato Sauce', 294, 1, ' can']
, [126, 'Cadbury Brunch Chocolate Chip', 140, 1, ' bar']
, [127, 'Kelloggs Coco Pops Cereal Bar', 84, 1, ' 20g bar']
, [128, 'Kit Kat 2 Finger Milk', 104, 1, ' pack']
, [129, 'Mcvitie's Club Orange Chocolate Biscuit', 116, 1, ' bar']
, [130, 'Mcvities Gold Chocolate Biscuit', 117, 1, ' bar']
, [131, 'Cadbury Milk Chocolate Fingers', 27, 1, ' bar']
, [132, 'Barny Chocolate Kids Sponge Bear', 119, 1, ' 30g bar']
, [133, 'Fox's Mini Party Rings', 16, 1, ' ring']
, [134, 'Walkers Quavers Cheese ', 86, 1, ' 16g pack']
, [135, 'Jammie Dodgers Biscuits ', 77, 1, ' 18g biscuit']
, [136, 'Jacobs Cornish Wafers', 45, 1, ' 8.6g cracker']
, [137, 'Ritz Crackers', 18, 1, ' cracker']
, [138, 'Tesco 6 Pack Mini Breadsticks', 83, 1, ' pack']
, [139, 'Kp Nik Naks (any)', 142, 1, ' 25g pack']
, [140, 'Walkers Crisps (any)', 130, 1, ' 25g pack']
, [141, 'Kp Hula Hoops (any)', 121, 1, ' 24g pack']
, [142, 'Kp Skips Prawn Cocktail', 71, 1, ' 13.1g pack']
, [143, 'Mega Monster Munch Roast Beef', 108, 1, ' 22g pack']
, [144, 'Jacobs Mini Cheddars Original', 128, 1, ' 25g pack']
, [145, 'Tesco Onion Rings Snacks', 85, 1, ' 17g pack']
, [146, 'Doritos Cool Original Tortilla Chips', 149, 100, 'g']
, [147, 'Butterkist Toffee Popcorn', 424, 100, 'g']
, [148, 'Tesco Sweet Popcorn', 490, 100, 'g']
, [149, 'Tesco Everyday Value Roasted And Salted Cashew Nuts', 624, 100, 'g']
, [150, 'Maltesers', 503, 100, 'g']
, [151, 'Cadbury Dairy Milk Chocolate ', 73, 3, ' pieces']
, [152, 'Toblerone', 175, 1, ' 32.7g triangle']
, [153, 'Cadbury Twirl Bites', 528, 100, 'g']
, [154, 'Cadbury Dairy Milk Twirl Chocolate Bars', 114, 1, ' 21.5g bar']
, [155, 'Snickers', 213, 1, ' 41.7g bar']
, [156, 'Cadbury Dairy Milk Buttons ', 76, 1, ' 14.4g bag']
, [157, 'Kinder Surprise Egg', 111, 1, ' 20g egg']
, [158, 'Cadbury Wispa Gold Bar', 244, 1, ' 48g bar']
, [159, 'Tesco Milk Chocolate Buttons ', 536, 100, 'g']
, [160, 'Tesco White Chocolate Buttons', 560, 100, 'g']
, [161, 'Haribo Starmix', 342, 100, 'g']
, [162, 'Haribo Starmix', 55, 1, ' 16g pack']
, [163, 'Cadbury Fudge', 114, 1, ' 25.5g bar']
, [164, 'Bisto Favourite Gravy Granules', 55, 50, 'ml']
, [165, 'Oxo Beef Stock Cube', 35, 100, 'ml']
, [166, 'Tesco Pure Sunflower Oil', 124, 1, ' 15ml tablespoon']
, [167, 'Tesco Italian Chopped Tomatoes', 426, 1, ' 400g can']
, [168, 'Kelloggs Coco Pops Rocks ', 410, 100, 'g']
, [169, 'Tesco Bran Flakes', 356, 100, 'g']
, [170, 'Tesco Everyday Value Muesli ', 352, 100, 'g']
, [171, 'Petits Filous Fromage Frais Yoghurt', 75, 1, ' 85g pot']
, [172, 'Quaker Oat So Simple Original Porridge', 180, 1, ' 27g pack']
, [173, 'Quaker Oat So Simple Apple And Blueberry Porridge', 215, 1, ' 36g pack']
, [174, 'Quaker Oat So Simple Maple And Pecan Porridge', 215, 1, ' 35g pack']
, [175, 'Dolmio Bolognese Smooth Tomato Pasta Sauce', 49, 100, 'g']
, [176, 'Loyd Grossman Sweet Tomato Bhuna Curry Sauce ', 98, 100, 'g']
, [177, 'Tesco Everyday Value Curry Sauce', 80, 100, 'g']
, [178, 'Pataks Plain Pappadums', 319, 100, 'g']
, [179, 'Uncle Ben's Sweet And Sour Sauce', 71, 100, 'g']
, [180, 'Sharwoods Medium Noodles', 367, 100, 'g raw']
, [181, 'Tesco Penne Pasta Quills', 360, 100, 'g raw']
, [182, 'Tesco Spaghetti', 360, 100, 'g']
, [183, 'Tesco Basmati Rice', 356, 100, 'g']
, [184, 'Uncle Bens Microwave Basmati Rice', 191, .5, ' pack']
, [185, 'Uncle Bens Microwave Special Fried Rice', 196, .5, ' pack']
, [186, 'Tesco Easy Cook Brown Rice', 356, 100, 'g']
, [187, 'Uncle Bens Microwave Golden Vegetable Rice', 191, .5, ' pack']
, [188, 'Heinz Top Down Squeezy Tomato Ketchup Sauce', 102, 100, 'g']
, [189, 'Hp Brown Sauce', 122, 100, 'g']
, [190, 'Hellmann's Garlic Squeezy Mayonnaise', 267, 100, 'g']
, [191, 'Tesco Garlic Mayonnaise', 311, 100, 'g']
, [192, 'Hellmann's Light Squeezy Mayonnaise', 267, 100, 'g']
, [193, 'Heinz Salad Cream 30% Less Fat', 218, 100, 'g']
, [194, 'Colman's Original English Mustard Tube', 195, 100, 'g']
, [195, 'Marmite Yeast Extract', 111, 100, 'g']
, [196, 'Hartleys Best Strawberry Seedless Jam', 258, 100, 'g']
, [197, 'Tesco Smooth Peanut Butter', 660, 100, 'g']
, [198, 'Nutella Hazelnut Chocolate Spread', 546, 100, 'g']
, [199, 'Tesco Hazelnut Chocolate Spread', 550, 100, 'g']
, [200, 'Atora Shredded Suet', 829, 100, 'g']
, [201, 'Peppa Pig Mini Snack Raisins', 47, 1, ' 14g pack']
, [202, 'Whitworths Frootz (any)', 333, 100, 'g']
, [203, 'Tesco Everyday Value Pickled Silver Skin Onions', 45, 100, 'g']
, [204, 'Tesco Pickled Silverskin Onions', 48, 100, 'g']
, [205, 'Tesco Petits Pois', 61, 100, 'g']
, [206, 'Birds Eye Steamfresh 4 Classic Garden Mix Vegetable', 232, 1, ' Steambag (135g)']
, [207, 'Mccain Extra Chunky Home Chips', 169, 100, 'g']
, [208, 'Tesco Thin And Crispy Oven Chips', 215, 100, 'g']
, [209, 'Tesco Homestyle Straight Cut Oven Chips', 174, 100, 'g']
, [210, 'Mccain Smiles', 193, 100, 'g']
, [211, 'Tesco Potato Croquettes', 208, 100, 'g']
, [212, 'Tesco Potato Waffles ', 88, 1, '  waffle (45g)']
, [213, 'Mccain Lightly Spiced Wedges', 177, 100, 'g']
, [214, 'Mccain Roasts', 276, 100, 'g']
, [215, 'Tesco Cod Fishcakes', 87, 1, ' Fishcake (47g)']
, [216, 'Birds Eye Cod Fish Fingers', 244, 4, ' Fish Fingers (112g)']
, [217, 'Tesco Crispy Battered Chicken Steaks', 201, 1, '  chicken steak (86g)']
, [218, 'Tesco 4 Garlic Butter Breaded Chicken Kievs', 318, 100, ' kiev (106g)']
, [219, 'Tesco 4 Southern Fried Chicken Steaks', 185, 100, ' chicken steak (86g)']
, [220, 'Tesco Frozen Breaded Steaks', 233, 100, 'g']
, [221, 'Bernard Matthews Turkey Dinosaurs', 292, 100, 'g']
, [222, 'Bernard Matthews 15 Mini Kievs', 234, 100, 'g']
, [223, 'Birds Eye 4 Original Beef Quarter Pounder Burgers', 251, 100, ' Quarter Pounder (114g)']
, [224, 'Tesco Chicken Breast Fillet', 109, 100, ' chicken breast (81g)']
, [225, 'Tesco Mini Chicken Breast Fillets', 152, 3, ' fillets']
, [226, 'Richmond Thick Irish Recipe Sausages', 97, 1, ' sausage']
, [227, 'Tesco Meat Free Cauliflower Cheese Grills', 228, 100, ' cauliflower grill (96g) ']
, [228, 'Quorn Chicken Style Pieces', 99, 100, 'g']
, [229, 'Quorn Mince', 105, 100, 'g']
, [230, 'Tesco Meat Free Hot Dog Style Sausages', 133, 2, ' sausages (60g)']
, [231, 'Tesco Stonebaked Thin Double Pepperoni Pizza', 802, 1, ' pizza']
, [232, 'Tesco Stonebaked Thin Four Cheese Pizza', 776, 1, ' pizza']
, [233, 'Tesco Garlic Butter Baguette ', 350, 100, 'g']
, [234, 'Kelly's Clotted Cream Ice Cream', 228, 100, 'g']
, [235, 'Tesco Soft Scoop Cornish Ice Cream', 200, 100, 'g']
, [236, 'Mackie's Traditional Luxury Dairy Ice Cream', 204, 100, 'g']
, [237, 'Tesco Soft Scoop Chocolate', 160, 100, 'g']
, [238, 'Cornetto Classico Ice Cream Cone', 187, 1, ' cone']
, [239, 'Tesco 4 Belgian White Chocolate Ice Cream', 288, 1, ' ice cream']
, [240, 'Calippo Mini Ice Lolly', 75, 1, ' lolly']
, [241, 'Tesco Real Fruit Splits', 68, 1, ' lolly']
, [242, 'Rowntrees Fruit Pastilles Lollies', 54, 1, ' lolly']
, [243, 'Nestle Fab Strawberry Ice Lollies', 82, 1, ' lolly']
, [244, 'Tesco Rocket Lollies', 39, 1, ' lolly']
, [245, 'Twister Mini Ice Cream Lolly', 42, 1, ' lolly']
, [246, 'Cadbury Flake Ice Cream', 205, 100, 'g']
, [247, 'Nesquik Chocolate Powder', 151, 1, ' (200ml) serving ']
, [248, 'Aero Instant Hot Chocolate Drink', 98, 1, ' 200ml serving']
, [249, 'Jack Daniel's Tennessee Whiskey', 54, 25, 'ml']
, [250, 'Cheerios', 380, 100, 'g']
, [251, 'Semi Skimmed Milk (Tesco British)', 50, 100, 'g']
, [252, 'Choc Milk (nesquik + semi-skimmed milk)', 151, 1, ' 200ml Glass']
, [253, 'Satsuma, Clementine, Mandarin', 42, 1, ' fruit']
, [254, 'Clover Light', 454, 100, 'g']
, [255, 'Fruit Splash (Tesco)', 11, 1, ' 250ml bottle']
, [256, 'Wheetos (chocolate)', 116, 100, 'g']
, [257, 'zzz', 100, 100, 'g']
, [258, 'zzz', 100, 100, 'g']
, [259, 'zzz', 100, 100, 'g']

, [260, 'zzz', 100, 100, 'g']
, [261, 'zzz', 100, 100, 'g']
, [262, 'zzz', 100, 100, 'g']
, [263, 'zzz', 100, 100, 'g']
, [264, 'zzz', 100, 100, 'g']
, [265, 'zzz', 100, 100, 'g']
, [266, 'zzz', 100, 100, 'g']
, [267, 'zzz', 100, 100, 'g']
, [268, 'zzz', 100, 100, 'g']
, [269, 'zzz', 100, 100, 'g']
/**/
]
;



