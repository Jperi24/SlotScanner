// scripts/slots.js
const slots = [
    {
      name: "Football Plinko Slot",
      rtp: "97.3%",
      iframe: "https://demo.bgaming-network.com/play/FootballPlinko/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
    },
    {
      name: "Wild Cash Slot",
      rtp: "96.8%",
      iframe: "https://demo.bgaming-network.com/play/WildCash/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
    },
    {
        name: "Mine Gems Slot",
        rtp: "96.8%",
        iframe: "https://demo.bgaming-network.com/play/MineGems/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
      },
      {
        name: "Dice Clash Slot",
        rtp: "96.8%",
        iframe: "https://demo.bgaming-network.com/play/DiceClash/FUN?deposit_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&locale=en&return_url=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&server=bitstarz"
      },
      {
        name: "The Ghost Walks Slot",
        rtp: "96.8%",
        iframe: "https://cdn1-all.bltr-static.com/?modification=4&sid=WbBsEIUtLJWz2gnhNuRoxMKpIwuUS-n_&strategy=iframe"
      },
      {
        name: "Piggy Bjorn - Muspelheim's Treasure Slot",
        rtp: "96.8%",
        iframe: "https://ga6.gahypergaming.com/rgs/views/gameart/gamelaunch.js?currency=eur&game_id=303&home=https%3A%2F%2Fbitstarz.com%2Fexit_iframe&key=3f5c4c8d3570416c810ec52de5861964913b2b7e&locale=en&mode=demo&partner_id=bitstarz"
      },
      {
        name: "Brumby's 243 Slot",
        rtp: "96.8%",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vZ2FtZXMuMXNwaW40d2luLmNvbS9nbWg1L2dhbWVzLmh0bWw%2FZ2FtZT1CcnVtYnlzMjQzXHUwMDI2bGFuZ3VhZ2U9ZW5cdTAwMjZmcmVlcGxheT10cnVlXHUwMDI2Y29uZmlnPTFcdTAwMjZjdXJyZW5jeT1GVU5cdTAwMjZleGl0PWh0dHBzOi8vYml0c3RhcnouY29tL2V4aXRfaWZyYW1lIiwic3RyYXRlZ3kiOiJpZnJhbWUifSwibGF1bmNoZXJfdmVyc2lvbiI6Im1hc3RlciJ9"
      },
      {
        name: "Wild Lucky Chance Slot",
        rtp: "96.8%",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vZ2FtZXMuMXNwaW40d2luLmNvbS9nbWg1L2dhbWVzLmh0bWw%2FZ2FtZT1XaWxkTHVja3lDaGFuY2VcdTAwMjZsYW5ndWFnZT1lblx1MDAyNmZyZWVwbGF5PXRydWVcdTAwMjZjb25maWc9MVx1MDAyNmN1cnJlbmN5PUZVTlx1MDAyNmV4aXQ9aHR0cHM6Ly9iaXRzdGFyei5jb20vZXhpdF9pZnJhbWUiLCJzdHJhdGVneSI6ImlmcmFtZSJ9LCJsYXVuY2hlcl92ZXJzaW9uIjoibWFzdGVyIn0%3D"
      },
      {
        name: "Sugar Pop Slot",
        rtp: "96.8%",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vc29mdHN3aXNzLWMyc3MuYmV0c29mdGdhbWluZy5jb20vY3dndWVzdGxvZ2luLmRvP2JhbmtJZD1iaXRzdGFyem5ld1x1MDAyNmdhbWVJZD00MDJcdTAwMjZob21lVXJsPWh0dHBzJTNBJTJGJTJGYml0c3RhcnouY29tJTJGZXhpdF9pZnJhbWVcdTAwMjZsYW5nPWVuIiwic3RyYXRlZ3kiOiJpZnJhbWUifSwibGF1bmNoZXJfdmVyc2lvbiI6Im1hc3RlciJ9"
      },
      {
        name: "Quest to the West Slot",
        rtp: "96.8%",
        iframe: "https://s3.eu-central-1.amazonaws.com/ignition.button/round-3/index.html?options=eyJsYXVuY2hfb3B0aW9ucyI6eyJnYW1lX3VybCI6Imh0dHBzOi8vc29mdHN3aXNzLWMyc3MuYmV0c29mdGdhbWluZy5jb20vY3dndWVzdGxvZ2luLmRvP2JhbmtJZD1iaXRzdGFyem5ld1x1MDAyNmdhbWVJZD04MjBcdTAwMjZob21lVXJsPWh0dHBzJTNBJTJGJTJGYml0c3RhcnouY29tJTJGZXhpdF9pZnJhbWVcdTAwMjZsYW5nPWVuIiwic3RyYXRlZ3kiOiJpZnJhbWUifSwibGF1bmNoZXJfdmVyc2lvbiI6Im1hc3RlciJ9"
      }

 
  ];
  
  window.slots = slots;
  