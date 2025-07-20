import { Product } from "./types"

export const categories = [
    { id: 1, name: 'cameras' },
    { id: 2, name: 'computers' },
    { id: 3, name: 'phones' },
    { id: 4, name: 'tablets' },
    { id: 5, name: 'watches' },
]
export const data: Product[] = [
    {   id: 1,
        title: "Tablet 2",
        image: "https://cdn.prod.website-files.com/56fde5e17a6e8a4d62ae2e3e/56fe1e2ed0da234d7d1a4a11_tablet-2%20-%20Edited.jpg",
        price: 99.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus eu magna dictum varius. Nulla et elementum ante."+
         "Ut euismod cursus nisl, eu rutrum ligula fermentum non. Praesent porta finibus interdum. Cras congue diam vel purus tristique,"+
          "nec venenatis nulla vestibulum. Suspendisse ac est condimentum, luctus felis egestas, eleifend ex. Morbi interdum nec arcu at lacinia."+
           "Pellentesque imperdiet mauris porttitor, pretium nunc placerat, malesuada lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"+
            "Proin vulputate at metus non imperdiet. Sed nec metus hendrerit risus convallis interdum. Curabitur et fringilla nulla. Donec accumsan lacus vel ante imperdiet convallis."+
                     " Ut sagittis tincidunt varius. Morbi pellentesque pulvinar sem, et lacinia risus ornare sit amet. In metus sem, fringilla in tincidunt ac, interdum eu felis."+
                      " Duis vitae metus porttitor, bibendum lacus a, rhoncus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."+
                        "Etiam non commodo ante. Etiam vel urna quis diam aliquet dictum ut eu mi. Pellentesque finibus dui urna, at bibendum erat scelerisque quis. Vivamus ultricies,"+
                         "lectus quis bibendum tristique, felis dolor blandit nisi, eu consectetur erat nulla a ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus."+
                          "Maecenas ut vehicula dui. In pretium porta justo ac pellentesque.",
        category: 'tablets'

        
    },
    {
        id: 2,
        title: "Phone 1", image: "https://cdn.prod.website-files.com/56fde5e17a6e8a4d62ae2e3e/5706a91a3d5bf3fa63b2564a_phone-1%20-%20Edited.jpg",
        price: 199.99,
        description: '',
        category: 'phones',
    },
    {
        id: 3,
        title: "Watch 1", image: "https://cdn.prod.website-files.com/56fde5e17a6e8a4d62ae2e3e/5706ab924603d1e170b30356_watch-1%20-%20Edited.jpg",
        price: 299.99,
        description: '',
        category: 'watches',
    },
    {
        id: 4,
        title: "Desktop 1", image: "https://cdn.prod.website-files.com/56fde5e17a6e8a4d62ae2e3e/5706a383f623bdd46be355b9_desktop-1%20-%20Edited.jpg",
        price: 1999.99,
        description: '',
        category: 'computers',
    },
]

