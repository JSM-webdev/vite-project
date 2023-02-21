function Nav (props) {
    return (
        <nav>
            {/*<a href="#home">Home</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#profile">Profile</a> */}
            {Props.links.map(link => {
                return <a href={'#${link}'}>{link}</a>
            })}
        </nav>
    )
}

export function Header() {
    return (
        <header class="header">
            <h1>Responsive Grid Layout</h1>
            <Nav links={['Home', 'Blog', 'Contact', 'Profile']}/>
        </header>
    )
}