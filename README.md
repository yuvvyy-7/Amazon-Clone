# 🛍️ Amazon Clone

A full-featured e-commerce web application that replicates the core functionality of Amazon. Built with vanilla JavaScript, HTML, and CSS, this project demonstrates modern web development practices with a focus on responsive design and user experience.

## ✨ Features

### 🏪 Shopping Experience
- **Product Catalog** - Browse and search through a curated product grid
- **Dynamic Shopping Cart** - Add/remove items with real-time cart updates
- **Responsive Product Grid** - Seamless experience across all devices
- **Real-time Cart Counter** - See item count at a glance

### 🛒 Checkout System
- **Order Review** - Comprehensive checkout page for order confirmation
- **Payment Summary** - Clear breakdown of costs and totals
- **Secure Checkout Header** - Professional checkout interface with security indicators
- **Order Summary** - Detailed review before purchase

### 📦 Order Management
- **Order History** - View all past orders with details
- **Order Tracking** - Track individual package deliveries
- **Order Details** - See items, quantities, delivery dates, and order IDs
- **Buy Again** - Quick reorder functionality for previous purchases

### 🎨 Design & UX
- **Mobile-First Design** - Fully responsive layout for phones, tablets, and desktops
- **Professional UI** - Clean, modern interface inspired by Amazon
- **Consistent Styling** - Shared CSS architecture for maintainability
- **Google Fonts Integration** - Roboto font for polished typography

## 🏗️ Project Structure

```
Amazon-Clone/
├── amazon.html          # Main shopping page
├── checkout.html        # Checkout/payment page
├── orders.html          # Order history page
├── tracking.html        # Order tracking page
│
├── scripts/             # JavaScript modules
│   ├── amazon.js        # Main product page logic
│   ├── checkout.js      # Checkout functionality
│   └── orders.js        # Order management
│
├── styles/              # CSS stylesheets
│   ├── shared/          # Reusable styles
│   │   ├── general.css  # Global styles
│   │   └── amazon-header.css
│   └── pages/           # Page-specific styles
│       ├── amazon.css
│       ├── orders.css
│       ├── checkout/
│       │   ├── checkout.css
│       │   └── checkout-header.css
│       └── tracking.css
│
├── images/              # Static assets
│   ├── amazon-logo-white.png
│   ├── amazon-mobile-logo-white.png
│   ├── products/        # Product images
│   └── icons/           # UI icons
│
├── data/                # Data files
├── backend/             # Backend services (in development)
└── tests/               # Test files
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yuvvyy-7/Amazon-Clone.git
   cd Amazon-Clone
   ```

2. **Open in browser**
   - Simply open `amazon.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```

3. **Navigate the application**
   - Start at the main product page (`amazon.html`)
   - Add items to your cart
   - Proceed to checkout (`checkout.html`)
   - View your orders (`orders.html`)
   - Track packages (`tracking.html`)

## 💻 Technologies Used

- **HTML5** - Semantic markup for page structure
- **CSS3** - Modern styling with responsive design
- **JavaScript (ES6+)** - Dynamic functionality and interactivity
- **Google Fonts** - Roboto typography
- **Responsive Web Design** - Mobile-first approach

## 🎯 Key Features Explained

### Cart Management
- Persistent cart state using JavaScript
- Real-time updates when items are added/removed
- Cart quantity display in header

### Order Processing
- Multi-step checkout flow
- Order summary with price calculations
- Payment summary with tax and shipping estimates

### Responsive Design
- Mobile viewport configuration
- Flexible grid layouts
- Touch-friendly UI elements

## 🔄 Workflow

```
Home (amazon.html)
    ↓
Add to Cart
    ↓
View Cart
    ↓
Checkout (checkout.html)
    ↓
Order Confirmation
    ↓
Orders Page (orders.html)
    ↓
Track Package (tracking.html)
```

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 🛠️ Development

### Project Structure Notes
- **Modular CSS**: Shared styles in `styles/shared/` for reusability
- **Page-specific CSS**: Each page has its own styling module
- **ES6 Modules**: JavaScript organized as ES6 modules
- **Clean Architecture**: Separation of concerns across HTML, CSS, and JS

## 📝 Learning Outcomes

This project is excellent for learning:
- Frontend web development fundamentals
- Responsive web design principles
- JavaScript DOM manipulation
- State management basics
- CSS best practices
- E-commerce UX/UI patterns

## 👤 Author

**yuvraj**
- GitHub: [@yuvvyy-7](https://github.com/yuvvyy-7)


## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a star! It helps others discover the project.

---

