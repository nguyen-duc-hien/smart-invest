tailwind.config = {
    theme: {
        extend: {
            screens: {
                '4xl': '1500px',
                '3xl': '1336px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                sm: '525px',
                DEFAULT: '1360px',
            },
            container: {
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1288px"
                },
                center: true,
                maxWidth: '1288px',
                padding: {
                    DEFAULT: '24px',
                    '4xl': '0px',
                    '3xl': '0px',
                    '2xl': '0px',
                    xl: '24px',
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
                logo: '#115231',
                tertiary: '#666',
                quaternary: '#D28D3E',
            }
        }
    }
}