// Pulse v2 — food database
// Ported directly from the live app's FOODS object so both versions
// agree on protein values. If you add foods here, add them to the
// live app too (or vice versa) until the two are merged.

const FOODS = {
  legumes: [
    {id:'lentils',name:'Red Lentils',icon:'🔴',p100:9.0,typical:180,typicalLabel:'1 cup cooked'},
    {id:'chickpeas',name:'Chickpeas',icon:'🟡',p100:19.3,typical:150,typicalLabel:'half can'},
    {id:'blackbeans',name:'Black Beans',icon:'⚫',p100:21.6,typical:150,typicalLabel:'half can'},
    {id:'kidney',name:'Kidney Beans',icon:'🫘',p100:22.5,typical:150,typicalLabel:'half can'},
    {id:'edamame',name:'Edamame',icon:'🟢',p100:11.9,typical:150,typicalLabel:'1 cup'},
    {id:'lupins',name:'Lupin Beans',icon:'🌼',p100:36.2,typical:100,typicalLabel:'small portion'},
    {id:'splitpeas',name:'Split Peas',icon:'💛',p100:8.3,typical:180,typicalLabel:'1 cup cooked'},
    {id:'blackeyed',name:'Black-eyed Peas',icon:'🤍',p100:23.5,typical:150,typicalLabel:'half can'},
    {id:'tofu',name:'Tofu',icon:'⬜',p100:8.0,typical:150,typicalLabel:'standard portion'},
    {id:'tempeh',name:'Tempeh',icon:'🟫',p100:19.0,typical:100,typicalLabel:'standard portion'},
    {id:'butterbeans',name:'Butter Beans',icon:'🫛',p100:8.0,typical:150,typicalLabel:'half can'},
    {id:'pinto',name:'Pinto Beans',icon:'🟤',p100:21.4,typical:150,typicalLabel:'half can'},
  ],
  meat: [
    {id:'chicken',name:'Chicken Breast',icon:'🍗',p100:31.0,typical:180,typicalLabel:'1 medium breast'},
    {id:'beef',name:'Beef Mince',icon:'🥩',p100:26.0,typical:150,typicalLabel:'standard portion'},
    {id:'tuna',name:'Tuna (tin)',icon:'🐟',p100:29.0,typical:145,typicalLabel:'1 tin'},
    {id:'eggs',name:'Eggs',icon:'🥚',p100:13.0,typical:200,typicalLabel:'4 large eggs'},
    {id:'salmon',name:'Salmon',icon:'🍣',p100:25.0,typical:150,typicalLabel:'1 fillet'},
    {id:'turkey',name:'Turkey',icon:'🦃',p100:29.0,typical:150,typicalLabel:'standard portion'},
    {id:'pork',name:'Pork Loin',icon:'🐷',p100:27.0,typical:150,typicalLabel:'1 chop'},
    {id:'prawns',name:'Prawns',icon:'🦐',p100:24.0,typical:150,typicalLabel:'standard portion'},
    {id:'bacon',name:'Bacon',icon:'🥓',p100:37.0,typical:60,typicalLabel:'2-3 rashers'},
    {id:'lamb',name:'Lamb',icon:'🍖',p100:25.0,typical:150,typicalLabel:'standard portion'},
    {id:'cod',name:'Cod',icon:'🐠',p100:23.0,typical:150,typicalLabel:'1 fillet'},
    {id:'ham',name:'Ham',icon:'🍖',p100:21.0,typical:60,typicalLabel:'2-3 slices'},
  ],
  dairy: [
    {id:'greekyo',name:'Greek Yoghurt',icon:'🥛',p100:10.0,typical:200,typicalLabel:'1 large pot'},
    {id:'cottage',name:'Cottage Cheese',icon:'🫙',p100:11.0,typical:200,typicalLabel:'half tub'},
    {id:'milk',name:'Whole Milk',icon:'🍼',p100:3.4,typical:250,typicalLabel:'1 large glass'},
    {id:'cheese',name:'Cheddar',icon:'🧀',p100:25.0,typical:40,typicalLabel:'small slice'},
    {id:'whey',name:'Whey Protein',icon:'💪',p100:80.0,typical:30,typicalLabel:'1 scoop'},
    {id:'quark',name:'Quark',icon:'🥣',p100:11.0,typical:200,typicalLabel:'half tub'},
    {id:'skyr',name:'Skyr',icon:'🍨',p100:11.0,typical:170,typicalLabel:'1 pot'},
    {id:'kefir',name:'Kefir',icon:'🥤',p100:3.6,typical:250,typicalLabel:'1 large glass'},
    {id:'mozzarella',name:'Mozzarella',icon:'🧀',p100:22.0,typical:50,typicalLabel:'small portion'},
    {id:'parmesan',name:'Parmesan',icon:'🧀',p100:38.0,typical:20,typicalLabel:'1 tbsp grated'},
  ],
  veg: [
    {id:'peas',name:'Peas',icon:'🟢',p100:5.4,typical:120,typicalLabel:'side portion'},
    {id:'broccoli',name:'Broccoli',icon:'🥦',p100:2.8,typical:120,typicalLabel:'side portion'},
    {id:'spinach',name:'Spinach',icon:'🥬',p100:2.9,typical:100,typicalLabel:'large handful'},
    {id:'sweetcorn',name:'Sweetcorn',icon:'🌽',p100:3.2,typical:120,typicalLabel:'side portion'},
    {id:'mushrooms',name:'Mushrooms',icon:'🍄',p100:3.1,typical:100,typicalLabel:'side portion'},
    {id:'sprouts',name:'Brussels Sprouts',icon:'🥬',p100:3.4,typical:120,typicalLabel:'side portion'},
    {id:'kale',name:'Kale',icon:'🥬',p100:4.3,typical:100,typicalLabel:'large handful'},
    {id:'asparagus',name:'Asparagus',icon:'🥬',p100:2.2,typical:120,typicalLabel:'side portion'},
    {id:'potato',name:'Potato',icon:'🥔',p100:2.0,typical:180,typicalLabel:'1 medium potato'},
  ],
  nuts: [
    {id:'almonds',name:'Almonds',icon:'🌰',p100:21.0,typical:30,typicalLabel:'small handful'},
    {id:'peanuts',name:'Peanuts',icon:'🥜',p100:25.0,typical:30,typicalLabel:'small handful'},
    {id:'peanutbutter',name:'Peanut Butter',icon:'🥜',p100:25.0,typical:30,typicalLabel:'1-2 tbsp'},
    {id:'cashews',name:'Cashews',icon:'🌰',p100:18.0,typical:30,typicalLabel:'small handful'},
    {id:'pumpkinseeds',name:'Pumpkin Seeds',icon:'🌱',p100:19.0,typical:30,typicalLabel:'small handful'},
    {id:'chiaseeds',name:'Chia Seeds',icon:'⚫',p100:17.0,typical:20,typicalLabel:'1-2 tbsp'},
    {id:'walnuts',name:'Walnuts',icon:'🌰',p100:15.0,typical:30,typicalLabel:'small handful'},
    {id:'pistachios',name:'Pistachios',icon:'🌰',p100:20.0,typical:30,typicalLabel:'small handful'},
  ]
};

function getAllFoods(customFoods){ return [...FOODS.legumes,...FOODS.meat,...FOODS.dairy,...FOODS.veg,...FOODS.nuts,...(customFoods||[])]; }
function getFood(id, customFoods){ return getAllFoods(customFoods).find(f=>f.id===id); }
