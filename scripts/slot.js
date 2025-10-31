// scripts/slots.js
const slots = [
    {
      name: "Dragon Fortune Frenzy",
      rtp: "97%",
      iframe: "https://dglobby.com/game_launcher.php?session_id=&channel=desktop&full_site_code=dgstgvg&language=en&game_name=dragonfortunefrenzy&category=slots&amount_type=1&reality_check=60&gameName=dragonfortunefrenzy&deposit_url=&lobby_url=&username="
    },
    {
      name: "Kung Food Panda",
      rtp: "97.3%",
      iframe: "https://dglobby.com/game_launcher.php?session_id=&channel=desktop&full_site_code=dgstgvg&language=en&game_name=kungfoodpanda&category=slots&amount_type=1&reality_check=60&gameName=kungfoodpanda&deposit_url=&lobby_url=&username="
    },
    {
      name: "Billy The Wild",
      rtp: "96.02%",
      iframe: "https://gms.elroyalecasino.com/billy-the-wild/index.html?user=0&oid=elroyale&token=&timeZone=-4&language=en&lobby.url=https://my.elroyalecasino.com/&cashier.url=https://my.elroyalecasino.com/quickdeposit?playerToken="
    },
    {
      name: "Money Express",
      rtp: "96.2%",
      iframe: "https://gms.elroyalecasino.com/money-express-92/index.html?user=0&oid=elroyale&token=&timeZone=-4&language=en&lobby.url=https://my.elroyalecasino.com/&cashier.url=https://my.elroyalecasino.com/quickdeposit?playerToken="
    },
    {
      name: "Cherry Sherry Lady",
      rtp: "97.04%",
      iframe: "https://gms.lasatlantis.com/cherry-sherry-lady/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Classic Hit",
      rtp: "97%",
      iframe: "https://gms.lasatlantis.com/classic-hit/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Miner Secrets",
      rtp: "96.7%",
      iframe: "https://gms.lasatlantis.com/miner-secrets/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "1000 Winning Nights",
      rtp: "96.7%",
      iframe: "https://gms.lasatlantis.com/onek-winning-nights/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Sunburst: Shooting Wilds",
      rtp: "97.6%",
      iframe: "https://gms.lasatlantis.com/sunburst-shooting-wilds/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Ally Aliens",
      rtp: "95.8%",
      iframe: "https://gms.reddog-games.com/ally-aliens/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Cactus Goes Nuts",
      rtp: "96.46%",
      iframe: "https://gms.reddog-games.com/cactus-goes-nuts/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Gems, Win, Respin!",
      rtp: "96%",
      iframe: "https://gms.reddog-games.com/gems-win-respin/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Panther S Riches",
      rtp: "95.5%",
      iframe: "https://gms.reddog-games.com/panther-s-riches/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Popping Mania",
      rtp: "96.4%",
      iframe: "https://gms.reddog-games.com/popping-mania/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "El Dorado",
      rtp: "96%",
      iframe: "https://gms.slotsempire.com/el-dorado/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Indiana The Power Stone",
      rtp: "96.5%",
      iframe: "https://gms.slotsempire.com/indiana-the-power-stone/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Koi Fish Future",
      rtp: "96.45%",
      iframe: "https://gms.slotsempire.com/koi-fish-fortune/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Moneyball",
      rtp: "96.5%",
      iframe: "https://gms.slotsempire.com/moneyball/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Gold West",
      rtp: "96.8%",
      iframe: "https://lobbyeur.sgplayfun.com/touch/sgnew/?game=S-GW03&menumode=off"
    },
    {
      name: "Big Tuna Bonanza",
      rtp: "97.2%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FBigTunaBonanza%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Freddogcasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Freddogcasino.com%252F%26server%3Dreddog"
    },
    {
      name: "Chicken Rush",
      rtp: "97%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FChickenRush%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Fortuna TRUEWAYS",
      rtp: "97.07%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FFortunaTrueways%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Haunted Reels",
      rtp: "97%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FHauntedReels%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252F%26server%3Dlasatlantis"
    },
    {
      name: "Lady Lucky Gun",
      rtp: "96.13%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FLadyLuckyGun%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Freddog-games.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Freddog-games.com%252F%26server%3Dreddog"
    },
    {
      name: "Oof The Goldmine Planet",
      rtp: "97%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FOof%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Panda Luck",
      rtp: "97%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FPandaLuck%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Rotating Element",
      rtp: "97.2%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FRotatingElement%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252F%26server%3Dlasatlantis"
    },
    {
      name: "Royal Fruits MultiLines",
      rtp: "97.16%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FRoyalFruitsMultiLines%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Voodoo People",
      rtp: "96.9%",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FVoodooPeople%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    }
  ];
  
  window.slots = slots;
  