tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1288px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                maxWidth: '1288px',
                padding: {
                    // DEFAULT: '24px',
                    '3xl': '0px',
                    '2xl': '32px',
                    xl: '32px',
                    lg: '24px',
                    md: '24px',
                    sm: '24px',
                },
            },
        },
        colors: {
            white: '#FFF',
            black: '#000',
            'bg-gray': '#E6E6E6',
            stock: {
                system: {
                    red: "#FF453A",
                    orange: "#FF9F0A",
                    yellow: "#FFD60A",
                    green: "#30D158",
                    teal: "#64D2FF",
                    blue: "#0A84FF",
                    indigo: "#5E5CE6",
                    purple: "#BF5AF2",
                    pink: "#FF2D55",
                },
            },
            text: {
                content: '#292929',
                title: '#F60',
            }
        }
    }
}