// scripts/slots.js
const slots = [
    {
      name: "Dragon Fortune Frenzy",
      rtp: "97%",
      image: "https://www.betus.com.pa/online-casino/game-info/wp-content/uploads/2024/01/dffrenzy.jpg",
      iframe: "https://dglobby.com/game_launcher.php?session_id=&channel=desktop&full_site_code=dgstgvg&language=en&game_name=dragonfortunefrenzy&category=slots&amount_type=1&reality_check=60&gameName=dragonfortunefrenzy&deposit_url=&lobby_url=&username="
    },
    {
      name: "Kung Food Panda",
      rtp: "97.3%",
      image: "https://slotsempire.com/build/assets/images/games/new/normal/kung-food-panda.df85a9d7.png",
      iframe: "https://dglobby.com/game_launcher.php?session_id=&channel=desktop&full_site_code=dgstgvg&language=en&game_name=kungfoodpanda&category=slots&amount_type=1&reality_check=60&gameName=kungfoodpanda&deposit_url=&lobby_url=&username="
    },
    {
      name: "Billy The Wild",
      rtp: "96.02%",
      image: "https://lasatlantis.com/build/assets/images/games/new/normal/billy-the-wild.2b74ff58.png",
      iframe: "https://gms.elroyalecasino.com/billy-the-wild/index.html?user=0&oid=elroyale&token=&timeZone=-4&language=en&lobby.url=https://my.elroyalecasino.com/&cashier.url=https://my.elroyalecasino.com/quickdeposit?playerToken="
    },
    {
      name: "Money Express",
      rtp: "96.2%",
      image: "https://slotsempire.com/build/assets/images/games/new/normal/money-express.a17e2bb0.png",
      iframe: "https://gms.elroyalecasino.com/money-express-92/index.html?user=0&oid=elroyale&token=&timeZone=-4&language=en&lobby.url=https://my.elroyalecasino.com/&cashier.url=https://my.elroyalecasino.com/quickdeposit?playerToken="
    },
    {
      name: "Cherry Sherry Lady",
      rtp: "97.04%",
      image: "https://lasatlantis.com/build/assets/images/games/new/normal/cherry-sherry-lady.f2e08a04.png",
      iframe: "https://gms.lasatlantis.com/cherry-sherry-lady/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Classic Hit",
      rtp: "97%",
      image: "https://lasatlantis.com/build/assets/images/games/new/normal/classic-hit.c9b1b396.png",
      iframe: "https://gms.lasatlantis.com/classic-hit/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Miner Secrets",
      rtp: "96.7%",
      image: "https://lasatlantis.com/build/assets/images/games/new/normal/miner-secrets.a93f1267.png",
      iframe: "https://gms.lasatlantis.com/miner-secrets/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "1000 Winning Nights",
      rtp: "96.7%",
      image: "https://lasatlantis.com/build/assets/images/games/new/normal/1000-winning-nights.20367b6d.png",
      iframe: "https://gms.lasatlantis.com/onek-winning-nights/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Sunburst: Shooting Wilds",
      rtp: "97.6%",
      image: "https://slotcatalog.com/userfiles/image/games/Begames/30076/Sunburst-Shooting-Wilds-6975246.jpg",
      iframe: "https://gms.lasatlantis.com/sunburst-shooting-wilds/index.html?user=0&oid=lasatlantis&token=&timeZone=-4&language=en&lobby.url=https://my.lasatlantis.com/&cashier.url=https://my.lasatlantis.com/quickdeposit"
    },
    {
      name: "Ally Aliens",
      rtp: "95.8%",
      image: "https://slotsempire.com/build/assets/images/games/new/normal/ally-aliens.de63c1e1.png",
      iframe: "https://gms.reddog-games.com/ally-aliens/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Cactus Goes Nuts",
      rtp: "96.46%",
      image: "https://assets.slotslaunch.com/37844/cactus-goes-nuts.jpg",
      iframe: "https://gms.reddog-games.com/cactus-goes-nuts/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Gems, Win, Respin!",
      rtp: "96%",
      image: "https://slotsempire.com/build/assets/images/games/new/normal/gems-win-respin.c859628a.png",
      iframe: "https://gms.reddog-games.com/gems-win-respin/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Panther S Riches",
      rtp: "95.5%",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10AUawPoY5sIbN4KgxQMm59LNhby_Uq2DmQ&s",
      iframe: "https://gms.reddog-games.com/panther-s-riches/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "Popping Mania",
      rtp: "96.4%",
      image: "https://slotsempire.com/build/assets/images/games/new/normal/popping-mania.97e3fcf1.png",
      iframe: "https://gms.reddog-games.com/popping-mania/index.html?user=0&oid=reddog&token=&timeZone=-4&language=en&lobby.url=https://reddog-games.com/&cashier.url=https://reddog-games.com/quickdeposit?playerToken="
    },
    {
      name: "El Dorado",
      rtp: "96%",
      image: "https://galaxsys.co/media/2024/12/16/0786aa468e46fc3b44062fdff79afe6049f6eaf8.png",
      iframe: "https://gms.slotsempire.com/el-dorado/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Indiana The Power Stone",
      rtp: "96.5%",
      image: "https://lasatlantis.com/build/assets/images/games/new/normal/indiana-the-power-stone.af4b76cc.png",
      iframe: "https://gms.slotsempire.com/indiana-the-power-stone/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Koi Fish Future",
      rtp: "96.45%",
      image: "https://playnetic.com/wp-content/uploads/2025/03/Koi_Fish_Fortune_Web_Thumbnail_900x507px.jpg",
      iframe: "https://gms.slotsempire.com/koi-fish-fortune/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Moneyball",
      rtp: "96.5%",
      image: "https://slotsempire.com/build/assets/images/games/new/normal/moneyball.931ae792.png",
      iframe: "https://gms.slotsempire.com/moneyball/index.html?user=0&oid=slotsempire&token=&timeZone=-4&language=en&lobby.url=https://my.slotsempire.com/&cashier.url=https://my.slotsempire.com/my-account/finances/deposit?playerToken="
    },
    {
      name: "Gold West",
      rtp: "96.8%",
      image: "https://goodluckmate.com/storage/slot/ff02ff1a331f6a8c6567f83746c57781/c/gold-west-spadegaming-review-250x250.jpg",
      iframe: "https://lobbyeur.sgplayfun.com/touch/sgnew/?game=S-GW03&menumode=off"
    },
    {
      name: "Big Tuna Bonanza",
      rtp: "97.2%",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OIdby9QIJ-RkBprfss7_vLfJISvvMSd-7g&s",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FBigTunaBonanza%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Freddogcasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Freddogcasino.com%252F%26server%3Dreddog"
    },
    {
      name: "Chicken Rush",
      rtp: "97%",
      image: "https://bgaming.com/wp-content/uploads/2025/04/6669c85190a9bd52b1074be8_Chicken_Rush_1020x1280.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FChickenRush%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Fortuna TRUEWAYS",
      rtp: "97.07%",
      image: "https://bgaming.com/wp-content/uploads/2025/04/66ccb95293cba5bddbdf9716_Fortuna_Trueways_1020x1280.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FFortunaTrueways%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Haunted Reels",
      rtp: "97%",
      image: "https://bgaming.com/wp-content/uploads/2025/04/66e861590f92fccf9a713045_Haunted_Reels_1020x1280.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FHauntedReels%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252F%26server%3Dlasatlantis"
    },
    {
      name: "Lady Lucky Gun",
      rtp: "96.13%",
      image: "https://bgaming.com/wp-content/uploads/2025/08/68551fe15302e13ebebe5072_Lady_Lucky_Gun_2x_Lady_Lucky_Gun_2x1728-670-1024x397.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FLadyLuckyGun%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Freddog-games.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Freddog-games.com%252F%26server%3Dreddog"
    },
    {
      name: "Oof The Goldmine Planet",
      rtp: "97%",
      image: "https://bgaming.com/wp-content/uploads/2025/04/669535d30dea24436ed6b96d_OOF_The_Goldmine_Planet-_1020x1280.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FOof%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Panda Luck",
      rtp: "97%",
      image: "https://bgaming.com/wp-content/uploads/2025/02/669535f3e706a57c76078f35_Panda_Luck_1020x1280-239x300.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FPandaLuck%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Rotating Element",
      rtp: "97.2%",
      image: "https://bgaming.com/wp-content/uploads/2025/04/66f14ac92db9ea42c3832d1b_Rotating_Element_1020x1280.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FRotatingElement%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.lasatlantis.com%252F%26server%3Dlasatlantis"
    },
    {
      name: "Royal Fruits MultiLines",
      rtp: "97.16%",
      image: "https://bgaming.com/wp-content/uploads/2025/06/66be1f927573e7f2247b8b74_Royal_Fruits_Multilines_1020%D1%851280.webp",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FRoyalFruitsMultiLines%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Voodoo People",
      rtp: "96.9%",
      image: "https://slotsia.com/en/wp-content/uploads/sites/12/img-Voodoo-people-game-card-1.png",
      iframe: "https://s3.eu-central-1.amazonaws.com/bg-other-interl/demo-interlayer.html?_target=%2Fplay%2FVoodooPeople%2FFUN%3Fdeposit_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252Fmy-account%252Ffinances%252Fdeposit%253FplayerToken%253D%26locale%3Den%26return_url%3Dhttps%253A%252F%252Fmy.elroyalecasino.com%252F%26server%3Delroyale"
    },
    {
      name: "Football Plinko Slot",
      rtp: "97.3%",
      image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/softswiss/FootballPlinko.webp",
      iframe: "https://demo.bgaming-network.com/play/FootballPlinko/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
    },
    {
      name: "Wild Cash Slot",
      rtp: "96.8%",
      image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/softswiss/WildCash.webp",
      iframe: "https://demo.bgaming-network.com/play/WildCash/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
    },
    {
        name: "Mine Gems Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/softswiss/MineGems.webp",
        iframe: "https://demo.bgaming-network.com/play/MineGems/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
      },
      {
        name: "Dice Clash Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/softswiss/DiceClash.webp",
        iframe: "https://demo.bgaming-network.com/play/DiceClash/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
      },
      {
        name: "The Ghost Walks Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/belatra/GhostWalks.webp",
        iframe: "https://cdn1-all.bltr-static.com/?modification=4&sid=WbBsEIUtLJWz2gnhNuRoxMKpIwuUS-n_&strategy=iframe"
      },
      {
        name: "Piggy Bjorn - Muspelheim's Treasure Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/gameart/PiggyBjornMuspelheimsTreasure.webp",
        iframe: "https://ga6.gahypergaming.com/rgs/views/gameart/gamelaunch.js?currency=eur&game_id=303&home=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&key=3f5c4c8d3570416c810ec52de5861964913b2b7e&locale=en&mode=demo&partner_id=bitstarz"
      },
      {
        name: "Brumby's 243 Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/1spin4win/Brumbys243.webp",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vZ2FtZXMuMXNwaW40d2luLmNvbS9nbWg1L2dhbWVzLmh0bWw%2FZ2FtZT1CcnVtYnlzMjQzXHUwMDI2bGFuZ3VhZ2U9ZW5cdTAwMjZmcmVlcGxheT10cnVlXHUwMDI2Y29uZmlnPTFcdTAwMjZjdXJyZW5jeT1GVU5cdTAwMjZleGl0PWh0dHBzOi8vYml0c3RhcnouY29tL2V4aXRfaWZyYW1lIiwic3RyYXRlZ3kiOiJpZnJhbWUifSwibGF1bmNoZXJfdmVyc2lvbiI6Im1hc3RlciJ9"
      },
      {
        name: "Wild Lucky Chance Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/1spin4win/WildLuckyChance.webp",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vZ2FtZXMuMXNwaW40d2luLmNvbS9nbWg1L2dhbWVzLmh0bWw%2FZ2FtZT1XaWxkTHVja3lDaGFuY2VcdTAwMjZsYW5ndWFnZT1lblx1MDAyNmZyZWVwbGF5PXRydWVcdTAwMjZjb25maWc9MVx1MDAyNmN1cnJlbmN5PUZVTlx1MDAyNmV4aXQ9aHR0cHM6Ly9iaXRzdGFyei5jb20vZXhpdF9pZnJhbWUiLCJzdHJhdGVneSI6ImlmcmFtZSJ9LCJsYXVuY2hlcl92ZXJzaW9uIjoibWFzdGVyIn0%3D"
      },
      {
        name: "Sugar Pop Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/bsg/SugarPop.webp",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vc29mdHN3aXNzLWMyc3MuYmV0c29mdGdhbWluZy5jb20vY3dndWVzdGxvZ2luLmRvP2JhbmtJZD1iaXRzdGFyem5ld1x1MDAyNmdhbWVJZD00MDJcdTAwMjZob21lVXJsPWh0dHBzJTNBJTJGJTJGYml0c3RhcnouY29tJTJGZXhpdF9pZnJhbWVcdTAwMjZsYW5nPWVuIiwic3RyYXRlZ3kiOiJpZnJhbWUifSwibGF1bmNoZXJfdmVyc2lvbiI6Im1hc3RlciJ9"
      },
      {
        name: "Quest to the West Slot",
        rtp: "96.8%",
        image: "https://admin-prod.b6zcdn.com/optimized_images/portrait/bsg/QuesttotheWest.webp",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vc29mdHN3aXNzLWMyc3MuYmV0c29mdGdhbWluZy5jb20vY3dndWVzdGxvZ2luLmRvP2JhbmtJZD1iaXRzdGFyem5ld1x1MDAyNmdhbWVJZD04MjBcdTAwMjZob21lVXJsPWh0dHBzJTNBJTJGJTJGYml0c3RhcnouY29tJTJGZXhpdF9pZnJhbWVcdTAwMjZsYW5nPWVuIiwic3RyYXRlZ3kiOiJpZnJhbWUifSwibGF1bmNoZXJfdmVyc2lvbiI6Im1hc3RlciJ9"
      }
  ];
  
  window.slots = slots;
