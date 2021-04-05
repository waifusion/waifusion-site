export type Trait = {
  id: string;
  values: string[];
};

const traits: Trait[] = [
  {
    id: "HeadAccessory",
    values: [
      "mask",
      "hairclip",
      "hairbow",
      "covidmask",
      "catgirl",
      "maidhat",
      "dogemask",
      "ears",
      "fox",
      "topdogehat",
      "wojakwacdonaldshat",
    ],
  },
  {
    id: "headaccessoryStyle",
    values: [
      "stonks",
      "btc",
      "pink",
      "eth",
      "uni",
      "white",
      "sushi",
      "black",
      "doge",
      "nyancat",
      "blue",
      "tabby",
      "smug",
      "bunny",
    ],
  },
  {
    id: "Top",
    values: [
      "gym",
      "90soutfit",
      "schoolgirl",
      "90s",
      "lingerie",
      "punk",
      "swimsuit",
      "catgirl",
      "pjs",
      "kimono",
      "vampire",
      "maid",
      "wacdonalds",
      "bunny",
      "overalls",
      "plugsuit",
    ],
  },
  {
    id: "Bottom",
    values: [
      "schoolgirl",
      "punk",
      "catgirl",
      "90soutfit",
      "kimono",
      "lingerie",
      "maid",
      "wacdonalds",
    ],
  },
  {
    id: "BottomColor",
    values: [
      "brown",
      "pastel",
      "tabby",
      "blue",
      "white",
      "red",
      "black",
      "yellow",
    ],
  },
  { id: "Skintone", values: ["light", "mid", "dark", "void"] },
  { id: "BodySize", values: ["petite", "busty"] },
  {
    id: "Background",
    values: [
      "classroom",
      "cherryblossom",
      "cleanbedroom",
      "house",
      "pool",
      "nature",
      "messybedroom",
      "void",
    ],
  },
  {
    id: "BackgroundStyle",
    values: ["normie", "sunset", "meme", "day", "redwick"],
  },
  {
    id: "Face",
    values: [
      "sinister",
      "opensmile",
      "surprised",
      "cat",
      "sad",
      "doki",
      "neutral",
      "angry",
      "pouty",
      "araara",
      "smug",
      "ahegao",
      "yandere",
    ],
  },
  {
    id: "Hairstyle",
    values: [
      "twintails",
      "bob",
      "curly",
      "buns",
      "pixie",
      "afro",
      "long",
      "plait",
      "drills",
      "afrobuns",
    ],
  },
  {
    id: "HairColor",
    values: [
      "black",
      "blonde",
      "pink",
      "white",
      "green",
      "blue",
      "special",
      "coral",
      "brown",
    ],
  },
  {
    id: "Eyes",
    values: ["yellow", "green", "brown", "blue", "pink", "heterochromia"],
  },
  {
    id: "SpeechBubble",
    values: ["baka", "senpai", "oniisama", "daisuki", "anonkun", "pogchamp"],
  },
  { id: "Socks", values: ["schoolgirl", "punkoutfit", "bunny", "lingerie"] },
  { id: "SocksColor", values: ["white", "red", "black", "brown", "pastel"] },
  {
    id: "TopColor",
    values: [
      "red",
      "black",
      "blue",
      "navy",
      "tabby",
      "brown",
      "pastel",
      "pink",
      "white",
      "solojazz",
      "yellow",
    ],
  },
  { id: "Tail", values: ["catgirl", "fox"] },
  { id: "TailColor", values: ["tabby", "white", "black"] },
  {
    id: "HandAccessory",
    values: [
      "pepebag",
      "katana",
      "nunchucks",
      "sushibag",
      "unifan",
      "hand",
      "pocky",
      "pepedoll",
      "leek",
    ],
  },
  { id: "NeckAccessory", values: ["chokerpunk", "catgirl", "hairclip"] },
  { id: "NeckAccessoryColor", values: ["black", "tabby", "white", "eth"] },
  { id: "Wings", values: ["angelwings", "fairywings", "mech"] },
  { id: "WingsColor", values: ["black", "white"] },
  { id: "Tattoo", values: ["rocket"] },
];

export default traits;
