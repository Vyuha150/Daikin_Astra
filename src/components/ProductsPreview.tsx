import React, { useEffect, useState } from "react";
import { ArrowRight, Thermometer, Zap, Wind, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import DatabaseImage from "@/components/ui/database-image";

const ProductsPreview = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [productCategories, setProductCategories] = useState([]);
  const [featuredModels, setFeaturedModels] = useState([]);
  const [technologyHighlights, setTechnologyHighlights] = useState([]);

  // Icon mapping for categories
  const iconMap = {
    "Split ACs": <Wind className="w-8 h-8" />,
    "Cassette ACs": <Building2 className="w-8 h-8" />,
    "VRV Systems": <Thermometer className="w-8 h-8" />,
    "Commercial Units": <Zap className="w-8 h-8" />,
  };

  useEffect(() => {
    fetch(`${API_URL}/api/products-preview/categories`)
      .then((res) => res.json())
      .then((data) => setProductCategories(data));
    fetch(`${API_URL}/api/products-preview/featured-models`)
      .then((res) => res.json())
      .then((data) => setFeaturedModels(data));
    fetch(`${API_URL}/api/products-preview/technology-highlights`)
      .then((res) => res.json())
      .then((data) => setTechnologyHighlights(data));
  }, [API_URL]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Thermometer className="w-5 h-5 mr-2 text-primary" />
            <span className="font-semibold text-primary">OUR PRODUCTS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Complete Range of Daikin Air Conditioners
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            From residential split ACs to commercial VRV systems, we offer the
            complete Daikin product range with professional installation and
            service support.
          </p>
        </div>
        {/* Product Categories Grid */}
        <div className="space-y-8 mb-16">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="card-product group relative overflow-hidden bg-gradient-to-br from-card via-card to-background border border-primary/10 hover:border-primary/30"
            >
              {category.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-offer to-offer/80 text-offer-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  <span className="relative z-10">Popular</span>
                </div>
              )}
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? "lg:col-start-3" : ""}`}>
                  <div className="professional-image-container h-48 bg-gradient-to-r from-primary/5 to-accent/5 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary-light/10 overflow-hidden">
                    <DatabaseImage
                      type="category"
                      id={category._id || category.id}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={category.title}
                      fallback={
                        <div className="text-primary group-hover:scale-110 group-hover:text-primary-light transition-all duration-500">
                          {iconMap[category.title] || (
                            <Building2 className="w-8 h-8" />
                          )}
                        </div>
                      }
                    />
                  </div>
                </div>
                {/* Content Section */}
                <div
                  className={`lg:col-span-2 space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-lg">
                      {category.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-white/70"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end">
                      <Button
                        className="btn-professional group relative overflow-hidden"
                        onClick={() => (window.location.href = "/products")}
                      >
                        <span className="relative z-10">View Details</span>
                        <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-light/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Featured Models */}
        <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 border border-primary/20 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Popular Daikin Models
            </h3>
            <p className="text-muted-foreground">
              Best-selling air conditioners with proven performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredModels.map((model, index) => (
              <div
                key={index}
                className="relative group overflow-hidden bg-gray-900/95 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-500 hover:-translate-y-2"
              >
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Premium Choice
                  </div>
                </div>

                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-6">
                  {/* Content Section */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {model.model}
                      </h4>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm font-semibold border border-blue-700">
                          {model.type}
                        </span>
                        <div className="inline-flex items-center bg-green-900/50 text-green-300 rounded-full px-3 py-1 text-sm font-bold border border-green-700">
                          ⭐ {model.efficiency}
                        </div>
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-4 border border-orange-600/50">
                      <div className="text-sm text-orange-300 font-medium mb-1">
                        Starting Price
                      </div>
                      <div className="text-2xl font-black text-orange-400 mb-2">
                        {model.price}
                      </div>
                      <div className="text-xs text-orange-300/80">
                        *Including installation
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h5 className="font-bold text-gray-200 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Key Features
                      </h5>
                      <ul className="space-y-2">
                        {model.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-sm text-gray-300 hover:text-blue-300 transition-colors duration-200"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        {model.features.length > 3 && (
                          <li className="text-sm text-blue-400 font-medium">
                            +{model.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn border border-blue-500"
                        onClick={() =>
                          window.open(
                            "https://wa.me/919247041999?text=Hi! I want to know more about " +
                              model.model,
                            "_blank"
                          )
                        }
                      >
                        <span className="flex items-center justify-center gap-2">
                          💬 Get Instant Quote
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Technology Highlight */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              World's Leading Air Conditioning Technology
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of Daikin's Variable Refrigerant Temperature
              (VRT) technology, delivering superior comfort and energy
              efficiency for every application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {technologyHighlights.map((tech, index) => (
                <div key={index} className="bg-primary/10 rounded-lg p-4">
                  <p className="font-medium text-primary">{tech.name}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="btn-hero"
                onClick={() => scrollToSection("contact")}
              >
                Explore All Products
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://wa.me/919247041999?text=Hi! I want technical details about Daikin ACs",
                    "_blank"
                  )
                }
              >
                Technical Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
