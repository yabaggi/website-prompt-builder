import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Copy, Download, Eye, Sparkles, Code, Palette, Zap, EyeOff } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import VisualPreview from './components/VisualPreview.jsx'
import CodeGenerator from './components/CodeGenerator.jsx'
import LogoParameters from './components/LogoParameters.jsx'
import HeaderParameters from './components/HeaderParameters.jsx'
import HeroSectionParameters from './components/HeroSectionParameters.jsx'
import FooterParameters from './components/FooterParameters.jsx'
import './App.css'

// Component data structure
const componentCategories = {
  general: {
    title: "General App/Webpage Setup",
    icon: <Sparkles className="w-4 h-4" />,
    components: {
      "Personal Use": [
        "Personal portfolio website",
        "Resume/CV website with downloadable PDF",
        "Personal blog with newsletter signup",
        "Artist/photographer portfolio with galleries",
        "Wedding or invitation website with RSVP form"
      ],
      "Business & Professional": [
        "Company profile website with about us, services, and contact page",
        "Landing page for a business/product",
        "SaaS product landing page with signup and pricing plans",
        "Consulting or freelancer services website",
        "Medical clinic website with doctor profiles and appointment booking",
        "Fitness/gym website with classes and membership plans",
        "Real estate listings website with property search",
        "Restaurant website with menu, online ordering, and reservations",
        "Travel or tourism website with guides, places, and booking",
        "Job board website with postings and applications"
      ],
      "Commerce & Online Stores": [
        "E-commerce store with product listings and checkout",
        "Marketplace website where users can post and sell items",
        "Portfolio + shop site for digital downloads",
        "Travel booking website (flights, hotels, packages)"
      ],
      "Events & Communities": [
        "Simple event website with schedule, speakers, and registration",
        "Non-profit or charity website with donation option",
        "Church/mosque/temple website with events and sermons",
        "Forum or community discussion site",
        "Sports team website with schedules, news, and results"
      ],
      "Media & Content": [
        "Blog website with categories and posts",
        "News or magazine-style website",
        "Podcast website with episode list and audio player",
        "Music band or DJ website with tracks and tour dates",
        "School/university website with courses and admissions info"
      ]
    }
  },
  basic: {
    title: "Basic Components",
    icon: <Code className="w-4 h-4" />,
    components: {
      "Logo": ["Text-logo", "Image-logo", "Combination logo (image + text)"],
      "Header": ["Classic", "Magazine-style", "Hero header", "Sticky/fixed", "Transparent", "Full-screen", "Hidden", "Mega menu", "Mobile-friendly", "Vertical"],
      "Search Bar": ["Standard input with button", "Autocomplete suggestion", "Filtered search"],
      "Hero Section": ["Static image", "Video background", "Carousel slider", "Animated or interactive hero", "Fullscreen hero"],
      "Navigation Bar": ["Horizontal menu", "Vertical sidebar menu", "Dropdown menus", "Mega menus", "Hamburger menus", "Sticky navigation"],
      "Breadcrumbs": ["Text breadcrumb trail", "Icon-based breadcrumbs", "Dynamic breadcrumbs"],
      "Call to Action (CTA)": ["Buttons", "Banners", "Popups/Modals", "Inline text links"],
      "Content Area": ["Single column", "Multi-column layouts", "Grid layouts", "Masonry layouts"],
      "Slider": ["Image slider", "Content slider", "Fullwidth slider", "Thumbnail navigation slider"],
      "Sidebar": ["Static sidebar", "Sticky or floating sidebar", "Collapsible sidebar"],
      "Forms": ["Contact form", "Membership registration", "Feedback or survey", "Subscription form"],
      "Blog Section": ["List view", "Grid view", "Single post view"],
      "Social Media Links": ["Icon buttons", "Text links", "Floating social bar", "Footer social links"]
    }
  },
  advanced: {
    title: "Advanced Features",
    icon: <Zap className="w-4 h-4" />,
    components: {
      "Notification/Alert Bar": ["Static banner", "Dismissible alert", "Animated scrolling ticker", "Sticky notification bar"],
      "Loading/Preloader Screen": ["Spinner/progress bar", "Animated logo or graphic", "Skeleton screens"],
      "Modal/Popup Windows": ["Entry popups", "Exit intent popups", "Lightboxes", "Form modals"],
      "Chatbot/Live Chat Interface": ["Rule-based chatbots", "AI-powered conversational bots", "Live agent chat"],
      "Feature/Product Cards": ["Static cards", "Interactive or hover-effect cards", "Flippable or expandable cards"],
      "Pagination/Infinite Scroll": ["Numeric pagination", "Load more button", "Infinite scroll"],
      "User Profile/Account Section": ["Dropdown menu profile", "Sidebar profile panel", "Full profile page"],
      "Analytics and Tracking Scripts": ["Google Analytics/Tag Manager", "Heatmaps"],
      "Accessibility Features": ["Keyboard navigation aids", "Screen reader support", "Contrast toggles", "Text resize controls"],
      "SEO Markup": ["Meta tags", "Structured data (JSON-LD)", "Open Graph tags"],
      "Progressive Web App (PWA) Features": ["Service worker caching", "App manifest configuration"],
      "Micro-Interactions": ["Button animations", "Loading animations", "Scroll-triggered effects"]
    }
  }
}

// Project templates
const projectTemplates = {
  "Startup Landing Page": {
    general: { component: "Business & Professional", type: "SaaS product landing page with signup and pricing plans" },
    basic: [
      { component: "Logo", type: "Combination logo (image + text)" },
      { component: "Header", type: "Hero header" },
      { component: "Hero Section", type: "Animated or interactive hero" },
      { component: "Navigation Bar", type: "Sticky navigation" },
      { component: "Call to Action (CTA)", type: "Buttons" }
    ],
    advanced: [
      { component: "Modal/Popup Windows", type: "Entry popups" },
      { component: "SEO Markup", type: "Meta tags" }
    ]
  },
  "E-commerce Store": {
    general: { component: "Commerce & Online Stores", type: "E-commerce store with product listings and checkout" },
    basic: [
      { component: "Logo", type: "Image-logo" },
      { component: "Header", type: "Mega menu" },
      { component: "Search Bar", type: "Filtered search" },
      { component: "Navigation Bar", type: "Mega menus" },
      { component: "Sidebar", type: "Collapsible sidebar" }
    ],
    advanced: [
      { component: "Feature/Product Cards", type: "Interactive or hover-effect cards" },
      { component: "Pagination/Infinite Scroll", type: "Load more button" },
      { component: "User Profile/Account Section", type: "Dropdown menu profile" }
    ]
  },
  "Personal Portfolio": {
    general: { component: "Personal Use", type: "Personal portfolio website" },
    basic: [
      { component: "Logo", type: "Text-logo" },
      { component: "Header", type: "Transparent" },
      { component: "Hero Section", type: "Fullscreen hero" },
      { component: "Navigation Bar", type: "Horizontal menu" },
      { component: "Social Media Links", type: "Icon buttons" }
    ],
    advanced: [
      { component: "Micro-Interactions", type: "Scroll-triggered effects" },
      { component: "SEO Markup", type: "Open Graph tags" }
    ]
  }
}

function App() {
  const [selectedComponents, setSelectedComponents] = useState({})
  const [componentParameters, setComponentParameters] = useState({})
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [activeTab, setActiveTab] = useState('general')
  const [showPreview, setShowPreview] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('')

  // Handle component selection
  const handleComponentChange = (category, component, type, checked) => {
    setSelectedComponents(prev => {
      const newState = { ...prev }
      
      if (!newState[category]) {
        newState[category] = {}
      }
      
      if (checked) {
        newState[category][component] = type
      } else {
        delete newState[category][component]
        // Also remove parameters when component is unchecked
        setComponentParameters(prevParams => {
          const newParams = { ...prevParams }
          if (newParams[category] && newParams[category][component]) {
            delete newParams[category][component]
          }
          return newParams
        })
      }
      
      return newState
    })
  }

  // Handle component parameters
  const handleComponentParameters = (category, component, parameters) => {
    setComponentParameters(prev => {
      const newState = { ...prev }
      
      if (!newState[category]) {
        newState[category] = {}
      }
      
      newState[category][component] = parameters
      
      return newState
    })
  }

  // Apply template
  const applyTemplate = (templateName) => {
    const template = projectTemplates[templateName]
    if (!template) return

    const newState = {}
    
    // Apply general selection
    if (template.general) {
      newState.general = {
        [template.general.component]: template.general.type
      }
    }
    
    // Apply basic components
    if (template.basic) {
      newState.basic = {}
      template.basic.forEach(item => {
        newState.basic[item.component] = item.type
      })
    }
    
    // Apply advanced components
    if (template.advanced) {
      newState.advanced = {}
      template.advanced.forEach(item => {
        newState.advanced[item.component] = item.type
      })
    }
    
    setSelectedComponents(newState)
    setSelectedTemplate(templateName)
  }

  // Generate prompt
  const generatePrompt = () => {
    const selected = []
    
    Object.entries(selectedComponents).forEach(([category, components]) => {
      Object.entries(components).forEach(([component, type]) => {
        const parameters = componentParameters[category]?.[component]
        selected.push({ component, type, parameters })
      })
    })

    if (selected.length === 0) {
      setGeneratedPrompt('Please select at least one component and its type.')
      return
    }

    let prompt = 'You are a full-stack web application developer. '
    prompt += 'Create a modern, responsive single-page web application'
    
    // Add the general selection context
    const generalSelection = selectedComponents.general
    if (generalSelection) {
      const generalType = Object.values(generalSelection)[0]
      if (generalType) {
        prompt += ` for ${generalType.toLowerCase()}`
      }
    }
    
    prompt += ' that incorporates ALL of the following components into a complete, fully integrated app:\n\n'

    selected.forEach(item => {
      let componentDescription = `• ${item.component} with a ${item.type.toLowerCase()} implementation`
      
      // Add specific parameters for Logo component
      if (item.component === 'Logo' && item.parameters) {
        const params = item.parameters
        componentDescription += '\n  Logo specifications:'
        
        if (params.type === 'text' && params.text) {
          componentDescription += `\n  - Text logo with the text: "${params.text}"`
        } else if (params.type === 'image' && (params.imageUrl || params.imageFile)) {
          if (params.imageFile) {
            componentDescription += `\n  - Image logo using uploaded file: ${params.imageFile.name}`
          } else if (params.imageUrl) {
            componentDescription += `\n  - Image logo from URL: ${params.imageUrl}`
          }
        } else if (params.type === 'combination') {
          if (params.text) {
            componentDescription += `\n  - Combination logo with text: "${params.text}"`
          }
          if (params.imageUrl || params.imageFile) {
            if (params.imageFile) {
              componentDescription += `\n  - Combined with uploaded image: ${params.imageFile.name}`
            } else if (params.imageUrl) {
              componentDescription += `\n  - Combined with image from URL: ${params.imageUrl}`
            }
          }
        }
      }
      
      // Add specific parameters for Header component
      if (item.component === 'Header' && item.parameters) {
        const params = item.parameters
        componentDescription += '\n  Header specifications:'
        componentDescription += `\n  - Type: ${params.type}`
        if (params.options) {
          Object.entries(params.options).forEach(([key, value]) => {
            if (value) {
              componentDescription += `\n  - ${key}: ${value}`
            }
          })
        }
      }
      
      // Add specific parameters for Hero Section component
      if (item.component === 'Hero Section' && item.parameters) {
        const params = item.parameters
        componentDescription += '\n  Hero Section specifications:'
        componentDescription += `\n  - Type: ${params.type}`
        if (params.options) {
          Object.entries(params.options).forEach(([key, value]) => {
            if (value) {
              componentDescription += `\n  - ${key}: ${value}`
            }
          })
        }
      }
      
      // Add specific parameters for Footer component
      if (item.component === 'Footer' && item.parameters) {
        const params = item.parameters
        componentDescription += '\n  Footer specifications:'
        componentDescription += `\n  - Type: ${params.type}`
        if (params.options) {
          Object.entries(params.options).forEach(([key, value]) => {
            if (value) {
              componentDescription += `\n  - ${key}: ${value}`
            }
          })
        }
      }
      
      prompt += componentDescription + '\n'
    })

    prompt += '\nRequirements:\n'
    prompt += '• Use modern web technologies (HTML5, CSS3, JavaScript ES6+)\n'
    prompt += '• Implement responsive design for mobile, tablet, and desktop\n'
    prompt += '• Include meaningful test data and placeholder content\n'
    prompt += '• Ensure accessibility compliance (WCAG 2.1 AA)\n'
    prompt += '• Optimize for performance and SEO\n'
    prompt += '• Use consistent styling and smooth interactions\n'
    prompt += '• Provide a single, cohesive HTML file with embedded CSS and JavaScript\n'
    prompt += '• Include hover effects, transitions, and micro-interactions\n'
    prompt += '• Ensure cross-browser compatibility\n\n'
    prompt += 'The final application should be production-ready and demonstrate modern web development best practices.'

    setGeneratedPrompt(prompt)
  }

  // Copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt)
      // Show success feedback
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // Download as file
  const downloadPrompt = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'website-prompt.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Clear selections
  const clearSelections = () => {
    setSelectedComponents({})
    setComponentParameters({})
    setGeneratedPrompt('')
    setSelectedTemplate('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Website Prompt Builder</h1>
                <p className="text-sm text-gray-600">Create professional web development prompts</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
                className="hidden sm:flex"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? 'Hide' : 'Show'} Preview
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open('https://manus.im/invitation/0KURKXPMTH4IIY', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Try Manus AI
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Templates Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Quick Start Templates</span>
                </CardTitle>
                <CardDescription>
                  Choose a template to get started quickly, then customize as needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.keys(projectTemplates).map((templateName) => (
                    <Button
                      key={templateName}
                      variant={selectedTemplate === templateName ? "default" : "outline"}
                      onClick={() => applyTemplate(templateName)}
                      className="h-auto p-4 text-left justify-start"
                    >
                      <div>
                        <div className="font-medium">{templateName}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Pre-configured components
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Component Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Component Selection</CardTitle>
                <CardDescription>
                  Choose the components and features for your website.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    {Object.entries(componentCategories).map(([key, category]) => (
                      <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                        {category.icon}
                        <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {Object.entries(componentCategories).map(([categoryKey, category]) => (
                    <TabsContent key={categoryKey} value={categoryKey} className="space-y-4">
                      <div className="space-y-4">
                        {Object.entries(category.components).map(([componentName, types]) => (
                          <div key={componentName} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`${categoryKey}-${componentName}`}
                                checked={selectedComponents[categoryKey]?.[componentName] !== undefined}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    handleComponentChange(categoryKey, componentName, types[0], true)
                                  } else {
                                    handleComponentChange(categoryKey, componentName, '', false)
                                  }
                                }}
                              />
                              <label
                                htmlFor={`${categoryKey}-${componentName}`}
                                className="font-medium text-sm cursor-pointer"
                              >
                                {componentName}
                              </label>
                            </div>
                            
                            {selectedComponents[categoryKey]?.[componentName] !== undefined && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-6 space-y-3"
                              >
                                {/* Component Parameters */}
                                {componentName === 'Logo' ? (
                                  <LogoParameters
                                    value={componentParameters[categoryKey]?.[componentName]}
                                    onChange={(params) => handleComponentParameters(categoryKey, componentName, params)}
                                  />
                                ) : componentName === 'Header' ? (
                                  <HeaderParameters
                                    value={componentParameters[categoryKey]?.[componentName]}
                                    onChange={(params) => handleComponentParameters(categoryKey, componentName, params)}
                                  />
                                ) : componentName === 'Hero Section' ? (
                                  <HeroSectionParameters
                                    value={componentParameters[categoryKey]?.[componentName]}
                                    onChange={(params) => handleComponentParameters(categoryKey, componentName, params)}
                                  />
                                ) : componentName === 'Footer' ? (
                                  <FooterParameters
                                    value={componentParameters[categoryKey]?.[componentName]}
                                    onChange={(params) => handleComponentParameters(categoryKey, componentName, params)}
                                  />
                                ) : (
                                  <Select
                                    value={selectedComponents[categoryKey]?.[componentName] || ''}
                                    onValueChange={(value) => handleComponentChange(categoryKey, componentName, value, true)}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Choose type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {types.map((type) => (
                                        <SelectItem key={type} value={type}>
                                          {type}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                )}
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={generatePrompt} className="flex-1 sm:flex-none">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Prompt
              </Button>
              <Button variant="outline" onClick={clearSelections}>
                Clear All
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Preview and Tools */}
          <div className="xl:col-span-2 space-y-6">
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="prompt">Prompt</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              
              <TabsContent value="components" className="space-y-4">
                {/* Selected Components Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Selected Components</CardTitle>
                    <CardDescription>
                      {Object.values(selectedComponents).reduce((total, category) => total + Object.keys(category).length, 0)} components selected
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {Object.entries(selectedComponents).map(([category, components]) =>
                        Object.entries(components).map(([component, type]) => (
                          <div key={`${category}-${component}`} className="flex items-start space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {category}
                            </Badge>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">{component}</div>
                              <div className="text-xs text-muted-foreground truncate">{type}</div>
                            </div>
                          </div>
                        ))
                      )}
                      {Object.keys(selectedComponents).length === 0 && (
                        <div className="text-center text-muted-foreground py-8">
                          <Code className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No components selected yet</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preview">
                <VisualPreview selectedComponents={selectedComponents} />
              </TabsContent>
              
              <TabsContent value="prompt">
                {/* Generated Prompt */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Generated Prompt</CardTitle>
                    <CardDescription>
                      Ready to use with AI development tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {generatedPrompt ? (
                      <div className="space-y-4">
                        <Textarea
                          value={generatedPrompt}
                          readOnly
                          className="min-h-[400px] text-sm font-mono"
                        />
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={copyToClipboard} className="flex-1">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                          <Button size="sm" variant="outline" onClick={downloadPrompt}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground py-12">
                        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Generate a prompt to see it here</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="code">
                <CodeGenerator 
                  selectedComponents={selectedComponents} 
                  generatedPrompt={generatedPrompt}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                Built with ❤️ using{' '}
                <a 
                  href="https://manus.im/invitation/0KURKXPMTH4IIY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Manus AI
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Create amazing applications with AI assistance
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://manus.im/invitation/0KURKXPMTH4IIY', '_blank')}
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started with Manus
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
