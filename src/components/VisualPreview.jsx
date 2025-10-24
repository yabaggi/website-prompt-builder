import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Monitor, Smartphone, Tablet } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const VisualPreview = ({ selectedComponents }) => {
  const [viewMode, setViewMode] = useState('desktop')
  const [mockupComponents, setMockupComponents] = useState([])

  useEffect(() => {
    // Convert selected components to visual mockup elements
    const components = []
    
    Object.entries(selectedComponents).forEach(([category, categoryComponents]) => {
      Object.entries(categoryComponents).forEach(([component, type]) => {
        components.push({
          category,
          component,
          type,
          id: `${category}-${component}`,
          order: getComponentOrder(component)
        })
      })
    })
    
    // Sort components by typical webpage order
    components.sort((a, b) => a.order - b.order)
    setMockupComponents(components)
  }, [selectedComponents])

  const getComponentOrder = (component) => {
    const order = {
      'Logo': 1,
      'Header': 2,
      'Navigation Bar': 3,
      'Hero Section': 4,
      'Search Bar': 5,
      'Breadcrumbs': 6,
      'Content Area': 7,
      'Slider': 8,
      'Feature/Product Cards': 9,
      'Blog Section': 10,
      'Forms': 11,
      'Sidebar': 12,
      'Call to Action (CTA)': 13,
      'Social Media Links': 14,
      'Footer': 15
    }
    return order[component] || 99
  }

  const getComponentMockup = (comp) => {
    const { component, type } = comp
    
    switch (component) {
      case 'Logo':
        return (
          <div className="flex items-center space-x-2 p-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <span className="font-bold text-sm">Logo</span>
          </div>
        )
      
      case 'Header':
        return (
          <div className="bg-gray-100 p-4 border-b">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Header</div>
              <div className="text-xs text-gray-500">{type}</div>
            </div>
          </div>
        )
      
      case 'Navigation Bar':
        return (
          <div className="bg-gray-50 p-2 border-b">
            <div className="flex space-x-4 text-xs">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
          </div>
        )
      
      case 'Hero Section':
        return (
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 text-white text-center">
            <h2 className="text-lg font-bold mb-2">Hero Section</h2>
            <p className="text-xs opacity-90">{type}</p>
          </div>
        )
      
      case 'Search Bar':
        return (
          <div className="p-4 bg-gray-50">
            <div className="flex">
              <input 
                className="flex-1 px-3 py-1 border rounded-l text-xs" 
                placeholder="Search..." 
                disabled 
              />
              <button className="px-3 py-1 bg-blue-500 text-white rounded-r text-xs">
                Search
              </button>
            </div>
          </div>
        )
      
      case 'Content Area':
        return (
          <div className="p-4">
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        )
      
      case 'Slider':
        return (
          <div className="bg-gray-100 p-4">
            <div className="flex space-x-2">
              <div className="w-12 h-8 bg-blue-300 rounded"></div>
              <div className="w-12 h-8 bg-gray-300 rounded"></div>
              <div className="w-12 h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        )
      
      case 'Feature/Product Cards':
        return (
          <div className="p-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="border rounded p-2">
                <div className="w-full h-6 bg-gray-200 rounded mb-1"></div>
                <div className="h-2 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>
        )
      
      case 'Forms':
        return (
          <div className="p-4 bg-gray-50">
            <div className="space-y-2">
              <div className="h-6 bg-white border rounded"></div>
              <div className="h-6 bg-white border rounded"></div>
              <div className="h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                Submit
              </div>
            </div>
          </div>
        )
      
      case 'Sidebar':
        return (
          <div className="bg-gray-100 p-3 border-l">
            <div className="space-y-2">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
              <div className="h-2 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        )
      
      case 'Call to Action (CTA)':
        return (
          <div className="p-4 bg-orange-100 text-center">
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-xs">
              Call to Action
            </button>
          </div>
        )
      
      case 'Social Media Links':
        return (
          <div className="p-2 flex justify-center space-x-2">
            {['f', 't', 'in'].map(social => (
              <div key={social} className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                {social}
              </div>
            ))}
          </div>
        )
      
      default:
        return (
          <div className="p-3 bg-gray-50 border-l-4 border-blue-400">
            <div className="text-xs font-medium">{component}</div>
            <div className="text-xs text-gray-500 mt-1">{type}</div>
          </div>
        )
    }
  }

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'w-64 h-96'
      case 'tablet':
        return 'w-80 h-96'
      default:
        return 'w-full h-96'
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Visual Preview</CardTitle>
          <div className="flex space-x-1">
            <button
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded ${viewMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`p-2 rounded ${viewMode === 'tablet' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded ${viewMode === 'mobile' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${getViewportClass()} border rounded-lg overflow-hidden bg-white shadow-lg`}
          >
            <div className="h-full overflow-y-auto">
              <AnimatePresence>
                {mockupComponents.length > 0 ? (
                  mockupComponents.map((comp, index) => (
                    <motion.div
                      key={comp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {getComponentMockup(comp)}
                      <Badge 
                        variant="secondary" 
                        className="absolute top-1 right-1 text-xs"
                      >
                        {comp.category}
                      </Badge>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <div className="text-center">
                      <Monitor className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Select components to see preview</p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        
        {mockupComponents.length > 0 && (
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Preview shows {mockupComponents.length} components in {viewMode} view
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default VisualPreview
