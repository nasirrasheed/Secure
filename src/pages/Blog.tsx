import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search, TrendingUp, Shield, Home, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "2024 Home Security Trends: What's New in Smart Protection",
      excerpt: "Discover the latest innovations in home security technology, from AI-powered cameras to smart doorbell integration.",
      author: "Sarah Johnson",
      date: "January 15, 2024",
      category: "Home Security",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Commercial Security Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect assets and ensure employee safety.",
      author: "Mike Thompson",
      date: "January 12, 2024",
      category: "Commercial",
      readTime: "7 min read",
      image: "/placeholder.svg",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "CCTV Installation Guide: Choosing the Right Camera Positions",
      excerpt: "Expert tips on optimal camera placement for maximum security coverage and deterrent effect.",
      author: "David Wilson",
      date: "January 10, 2024",
      category: "CCTV",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Understanding SIA Licensing: What It Means for You",
      excerpt: "Everything you need to know about SIA licensing and why it matters when choosing security providers.",
      author: "Emma Roberts",
      date: "January 8, 2024",
      category: "Industry News",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Access Control Systems: Keyless vs Traditional Security",
      excerpt: "Comparing modern keyless entry systems with traditional locks to help you make the right choice.",
      author: "James Martinez",
      date: "January 5, 2024",
      category: "Access Control",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Insurance Benefits of Professional Security Systems",
      excerpt: "How installing professional security systems can reduce your insurance premiums and provide peace of mind.",
      author: "Lisa Chen",
      date: "January 3, 2024",
      category: "Insurance",
      readTime: "3 min read"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Home Security", count: 8, icon: <Home className="w-4 h-4" /> },
    { name: "Commercial", count: 6, icon: <Building className="w-4 h-4" /> },
    { name: "CCTV", count: 5, icon: <Shield className="w-4 h-4" /> },
    { name: "Industry News", count: 3, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Access Control", count: 2, icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Security Insights & Expert Advice
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay informed with the latest security trends, expert tips, and industry insights 
              to help you make better security decisions.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-medium transition-shadow">
                    <div className="aspect-video bg-muted"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 ml-2" />
                          <span>{post.date}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 ml-2" />
                          <span>{post.date}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground">{category.icon}</div>
                        <span className="text-foreground">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest security insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Popular This Week</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  {recentPosts.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1 hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;