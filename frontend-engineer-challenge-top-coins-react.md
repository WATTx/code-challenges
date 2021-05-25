# WATTx Front-End Engineer Challenge: **Top Coins** (React)

### Overview

Create a webapp that allows for a simple analysis of crypto assets. The page should present a navigation bar with two pages:

- `/` - Market overview
- `/liquidity` - Liquidity analysis page

The app should fetch all the required data from a publicly available API.

- API: [coinmarketcap.com](https://coinmarketcap.com/api/)
- API endpoint: `/cryptocurrency/listings/latest`

By default `/cryptocurrency/listings/latest` endpoint returns top 100 coins. There should be an option to change it by using a select/dropdown with predefined values:

- `10`
- `50`
- `all` (maximum of [limit])

Keep it mind select/dropdown should have global scope and it should affect data on both pages: Market Overview and Liquidity.

##### Market Overview

It should render a _table_ (with received data) sorted by rank:

```
+------+----------+-----------+--------------------+------------------+----------------+
| Rank |   Name   |   Price   | Price Change (24h) |    Market Cap    |  Volume (24h)  |
+------+----------+-----------+--------------------+------------------+----------------+
|    1 | Bitcoin  | $6,764.99 | -4.41%             | $114,784,460,451 | $4,551,630,000 |
|    2 | Ethereum | $395.74   | -1.04%             | $39,064,506,094  | $1,367,120,000 |
|  ... | ...      | ...       | ...                | ...              | ...            |
+------+----------+-----------+--------------------+------------------+----------------+
```

##### Liquidity

It should render a _scatter plot chart_ where:

- `X` axis is Market Capitalization
- `Y` axis is Volume (24h)
- `Z` axis (or size of the point) is absolute price change (24h)

```
  |
  |                                     *
  |                                *
V |                  *        *        *
o |                       *
l |              *           *  *
u |     *           *  *      *      *
m |               *         *
e |        *   *      *         *
  |              *       *
  |           *      *
  |  *
  +---------------------------------------------
                   Market Cap
```

Chart should be interactive – when hover over the point, it should display a tooltip with information like (`name`, `marketcap`, `volume` & `price change`).

Each point represents one coin.

### Architecture

- React
- For UI you can use any framework (Bootstrap, Semantic-UI, etc) or write your own CSS.
- You're free to use any charts library. Think about the best fit for solving the task.
- For state management feel free to pick what suits you the best, may it be Reacts useContext or Redux, or something you always wanted to try out
- Make sure it works in latest Chrome, Safari, Firefox and Edge
- Webpage should be responsive (think about smartphone usage!)
- TypeScript? Go ahead! But it is not required.

### Hints

- CORS issue? Proxy.
- Besides that: Enjoy what you do!
