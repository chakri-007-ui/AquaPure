import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Droplets, Truck, Shield, Users, Phone, Mail, MapPin, Star } from "lucide-react"

export default function WaterPlantWebsite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">AquaPure</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#products" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Products
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">Get Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Premium Water Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Pure Water for a<span className="text-accent"> Healthier Life</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                We provide the highest quality water bottles, packets, and cans for homes and businesses. Trust in our
                commitment to purity, reliability, and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  View Products
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/crystal-clear-water-bottles-and-containers-in-mode.jpg" alt="Premium water products" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From individual bottles to bulk supply solutions, we have the perfect water products for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src="/premium-water-bottles-in-various-sizes.jpg" alt="Water Bottles" className="rounded-lg mb-4" />
                <CardTitle>Water Bottles</CardTitle>
                <CardDescription>Premium quality bottles in various sizes - 500ml, 1L, and 2L options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BPA-free materials</li>
                  <li>• Multiple size options</li>
                  <li>• Bulk ordering available</li>
                  <li>• Home & office delivery</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src="/water-packets-and-pouches-for-convenient-storage.jpg" alt="Water Packets" className="rounded-lg mb-4" />
                <CardTitle>Water Packets</CardTitle>
                <CardDescription>
                  Convenient water packets perfect for events, travel, and emergency supplies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Portable and lightweight</li>
                  <li>• Long shelf life</li>
                  <li>• Event-ready packaging</li>
                  <li>• Eco-friendly options</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src="/large-water-cans-and-containers-for-bulk-supply.jpg" alt="Water Cans" className="rounded-lg mb-4" />
                <CardTitle>Water Cans</CardTitle>
                <CardDescription>
                  Large capacity water cans ideal for businesses, construction sites, and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 5L, 10L, and 20L sizes</li>
                  <li>• Durable construction</li>
                  <li>• Easy-pour design</li>
                  <li>• Commercial grade quality</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive water supply solutions tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Free Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Fast and reliable delivery to your doorstep with no additional charges for orders above minimum
                quantity.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm">
                Every product undergoes rigorous quality testing to ensure the highest standards of purity and safety.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Bulk Orders</h3>
              <p className="text-muted-foreground text-sm">
                Special pricing and dedicated support for businesses, events, and large-scale requirements.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Droplets className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Custom Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Tailored water supply solutions including custom labeling and packaging for corporate clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/modern-water-treatment-facility-with-quality-contr.jpg"
                alt="Our water treatment facility"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">About AquaPure</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                With over 15 years of experience in the water industry, AquaPure has been committed to providing the
                highest quality water products to communities and businesses across the region.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Our state-of-the-art facility uses advanced purification technology to ensure every drop meets the
                strictest quality standards. We believe that access to pure, clean water is a fundamental right, and
                we're dedicated to making it accessible to everyone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-accent">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Excellent quality water and reliable delivery service. We've been using AquaPure for our office for
                  over 2 years now."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">JS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">John Smith</div>
                    <div className="text-xs text-muted-foreground">Office Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Great service for our construction site. The large water cans are perfect for our team's needs."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Maria Rodriguez</div>
                    <div className="text-xs text-muted-foreground">Site Supervisor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  "Pure, clean water that tastes great. The home delivery service is incredibly convenient for our
                  family."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">DL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">David Lee</div>
                    <div className="text-xs text-muted-foreground">Homeowner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to experience pure water quality? Contact us for quotes, orders, or any questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@aquapure.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Water Plant Road</p>
                  <p className="text-muted-foreground">Industrial District, City 12345</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell us about your water supply needs..." className="min-h-[100px]" />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Droplets className="h-6 w-6" />
                <span className="text-lg font-bold">AquaPure</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Providing pure, reliable water solutions for homes and businesses since 2009.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Products</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Water Bottles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Water Packets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Water Cans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Home Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Business Supply
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Event Catering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Quality Standards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80">© 2024 AquaPure Water Plant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
