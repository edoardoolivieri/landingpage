const stockxAPI = require('stockx-api');
const stockX = new stockxAPI();

export const getsneakersInfo = (sneakerInfo) => {
    stockX.fetchProductDetails(`https://stockx.com/${sneakerInfo}`)
        .then((infos) => {
            this.setState({
                isLoaded: true,
                sneakerInfo: infos
            })
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};

export const getSneaker = (sneakerInfo) => {
    stockX.searchProducts(sneakerInfo, { limit: 1 })
        .then((data) => {
            this.setState({
                isLoaded: true,
                sneaker: data
            })
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
};