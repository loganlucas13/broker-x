export const formatStockSymbol = (symbol: string): string => {
    let formattedSymbol = symbol.trim();

    if (!formattedSymbol || formattedSymbol.includes(' ')) {
        return 'INVALID';
    }

    if (formattedSymbol[0] === '$') {
        formattedSymbol = formattedSymbol.substring(1);
    }

    formattedSymbol = formattedSymbol.toUpperCase();

    return formattedSymbol;
};
