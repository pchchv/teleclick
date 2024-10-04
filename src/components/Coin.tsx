/**
* @prop onClick - what happened on click the coin
* @prop disabled - when coin can be clicked or not
*/
type CoinProps = {
    onClick: () => void;
    disabled?: boolean;
};
