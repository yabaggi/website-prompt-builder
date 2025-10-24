import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Copy, Download, Code2, FileText, Zap } from 'lucide-react'

const CodeGenerator = ({ selectedComponents, generatedPrompt }) => {
  const [selectedFramework, setSelectedFramework] = useState('html')
  const [generatedCode, setGeneratedCode] = useState('')

  const frameworks = {
    html: { name: 'HTML/CSS/JS', icon: '🌐' },
    react: { name: 'React', icon: '⚛️' },
    vue: { name: 'Vue.js', icon: '💚' },
    angular: { name: 'Angular', icon: '🅰️' },
    svelte: { name: 'Svelte', icon: '🧡' }
  }

  const generateCode = () => {
    const components = []
    Object.entries(selectedComponents).forEach(([category, categoryComponents]) => {
      Object.entries(categoryComponents).forEach(([component, type]) => {
        components.push({ component, type, category })
      })
    })

    if (components.length === 0) {
      setGeneratedCode('// No components selected')
      return
    }

    let code = ''
    
    switch (selectedFramework) {
      case 'html':
        code = generateHTMLCode(components)
        break
      case 'react':
        code = generateReactCode(components)
        break
      case 'vue':
        code = generateVueCode(components)
        break
      case 'angular':
        code = generateAngularCode(components)
        break
      case 'svelte':
        code = generateSvelteCode(components)
        break
      default:
        code = '// Framework not implemented yet'
    }
    
    setGeneratedCode(code)
  }

  const generateHTMLCode = (components) => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Website</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .header { background: #333; color: white; padding: 1rem 0; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 0; text-align: center; }
        .nav { background: #f4f4f4; padding: 1rem 0; }
        .nav ul { list-style: none; display: flex; gap: 2rem; }
        .content { padding: 2rem 0; }
        .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; }
        .card { border: 1px solid #ddd; border-radius: 8px; padding: 1.5rem; }
        .cta { background: #007bff; color: white; padding: 1rem 2rem; border: none; border-radius: 5px; cursor: pointer; }
        .footer { background: #333; color: white; padding: 2rem 0; text-align: center; }
    </style>
</head>
<body>
`

    components.forEach(comp => {
      switch (comp.component) {
        case 'Header':
          html += `    <header class="header">
        <div class="container">
            <h1>Your Website</h1>
        </div>
    </header>
`
          break
        case 'Navigation Bar':
          html += `    <nav class="nav">
        <div class="container">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
`
          break
        case 'Hero Section':
          html += `    <section class="hero">
        <div class="container">
            <h2>Welcome to Our Website</h2>
            <p>This is a ${comp.type.toLowerCase()}</p>
        </div>
    </section>
`
          break
        case 'Content Area':
          html += `    <main class="content">
        <div class="container">
            <h2>Main Content</h2>
            <p>This is the main content area with ${comp.type.toLowerCase()}.</p>
        </div>
    </main>
`
          break
        case 'Feature/Product Cards':
          html += `    <section class="cards">
        <div class="container">
            <div class="cards">
                <div class="card">
                    <h3>Feature 1</h3>
                    <p>Description of feature 1</p>
                </div>
                <div class="card">
                    <h3>Feature 2</h3>
                    <p>Description of feature 2</p>
                </div>
                <div class="card">
                    <h3>Feature 3</h3>
                    <p>Description of feature 3</p>
                </div>
            </div>
        </div>
    </section>
`
          break
        case 'Call to Action (CTA)':
          html += `    <section class="cta-section" style="text-align: center; padding: 2rem 0;">
        <div class="container">
            <button class="cta">Get Started Today</button>
        </div>
    </section>
`
          break
      }
    })

    html += `</body>
</html>`
    
    return html
  }

  const generateReactCode = (components) => {
    let imports = `import React from 'react';
import './App.css';

`
    
    let componentJSX = `function App() {
  return (
    <div className="App">
`

    components.forEach(comp => {
      switch (comp.component) {
        case 'Header':
          componentJSX += `      <header className="header">
        <div className="container">
          <h1>Your Website</h1>
        </div>
      </header>
`
          break
        case 'Navigation Bar':
          componentJSX += `      <nav className="nav">
        <div className="container">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
`
          break
        case 'Hero Section':
          componentJSX += `      <section className="hero">
        <div className="container">
          <h2>Welcome to Our Website</h2>
          <p>This is a ${comp.type.toLowerCase()}</p>
        </div>
      </section>
`
          break
        case 'Feature/Product Cards':
          componentJSX += `      <section className="cards">
        <div className="container">
          <div className="cards">
            {[1, 2, 3].map(i => (
              <div key={i} className="card">
                <h3>Feature {i}</h3>
                <p>Description of feature {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
`
          break
      }
    })

    componentJSX += `    </div>
  );
}

export default App;`

    return imports + componentJSX
  }

  const generateVueCode = (components) => {
    return `<template>
  <div id="app">
    <!-- Vue.js components will be generated here -->
    <header v-if="hasComponent('Header')" class="header">
      <div class="container">
        <h1>Your Website</h1>
      </div>
    </header>
    
    <nav v-if="hasComponent('Navigation Bar')" class="nav">
      <div class="container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    
    <!-- Add more components as needed -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      components: ${JSON.stringify(components, null, 6)}
    }
  },
  methods: {
    hasComponent(name) {
      return this.components.some(comp => comp.component === name)
    }
  }
}
</script>

<style>
/* Add your CSS styles here */
</style>`
  }

  const generateAngularCode = (components) => {
    return `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="app">
      <!-- Angular components will be generated here -->
      <header *ngIf="hasComponent('Header')" class="header">
        <div class="container">
          <h1>Your Website</h1>
        </div>
      </header>
      
      <nav *ngIf="hasComponent('Navigation Bar')" class="nav">
        <div class="container">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <!-- Add more components as needed -->
    </div>
  \`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  components = ${JSON.stringify(components, null, 4)};
  
  hasComponent(name: string): boolean {
    return this.components.some(comp => comp.component === name);
  }
}`
  }

  const generateSvelteCode = (components) => {
    return `<script>
  // Svelte component logic
  const components = ${JSON.stringify(components, null, 4)};
  
  function hasComponent(name) {
    return components.some(comp => comp.component === name);
  }
</script>

<div class="app">
  <!-- Svelte components will be generated here -->
  {#if hasComponent('Header')}
    <header class="header">
      <div class="container">
        <h1>Your Website</h1>
      </div>
    </header>
  {/if}
  
  {#if hasComponent('Navigation Bar')}
    <nav class="nav">
      <div class="container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  {/if}
  
  <!-- Add more components as needed -->
</div>

<style>
  /* Add your CSS styles here */
  .app {
    font-family: Arial, sans-serif;
  }
</style>`
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
    } catch (err) {
      console.error('Failed to copy code: ', err)
    }
  }

  const downloadCode = () => {
    const extension = selectedFramework === 'html' ? 'html' : 
                    selectedFramework === 'react' ? 'jsx' :
                    selectedFramework === 'vue' ? 'vue' :
                    selectedFramework === 'angular' ? 'ts' : 'svelte'
    
    const blob = new Blob([generatedCode], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `generated-code.${extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadProject = () => {
    // Create a simple project structure
    const files = {
      'package.json': JSON.stringify({
        name: 'generated-website',
        version: '1.0.0',
        description: 'Generated website from Website Prompt Builder',
        main: 'index.html',
        scripts: {
          start: 'serve .',
          build: 'echo "Build complete"'
        },
        dependencies: selectedFramework === 'react' ? {
          'react': '^18.0.0',
          'react-dom': '^18.0.0'
        } : {}
      }, null, 2),
      'README.md': `# Generated Website

This project was generated using the Website Prompt Builder.

## Components Included:
${Object.entries(selectedComponents).map(([category, components]) => 
  Object.entries(components).map(([comp, type]) => `- ${comp} (${type})`).join('\n')
).join('\n')}

## Getting Started:
1. Install dependencies: \`npm install\`
2. Start development server: \`npm start\`

## Original Prompt:
\`\`\`
${generatedPrompt}
\`\`\`
`,
      [`index.${selectedFramework === 'html' ? 'html' : selectedFramework === 'react' ? 'jsx' : selectedFramework}`]: generatedCode
    }

    // Create and download zip-like structure (simplified)
    const projectData = Object.entries(files).map(([filename, content]) => 
      `=== ${filename} ===\n${content}\n\n`
    ).join('')

    const blob = new Blob([projectData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'generated-project.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Code2 className="w-5 h-5" />
          <span>Code Generator</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="generator">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generator">Generate Code</TabsTrigger>
            <TabsTrigger value="project">Project Files</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generator" className="space-y-4">
            <div className="flex items-center space-x-4">
              <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select framework" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(frameworks).map(([key, framework]) => (
                    <SelectItem key={key} value={key}>
                      <span className="flex items-center space-x-2">
                        <span>{framework.icon}</span>
                        <span>{framework.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button onClick={generateCode}>
                <Zap className="w-4 h-4 mr-2" />
                Generate Code
              </Button>
            </div>

            {generatedCode && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">
                    {frameworks[selectedFramework].icon} {frameworks[selectedFramework].name}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={copyCode}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadCode}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                
                <Textarea
                  value={generatedCode}
                  readOnly
                  className="min-h-[400px] font-mono text-sm"
                />
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="project" className="space-y-4">
            <div className="text-center space-y-4">
              <div>
                <FileText className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <h3 className="font-medium">Download Complete Project</h3>
                <p className="text-sm text-gray-600">
                  Get a complete project structure with all necessary files
                </p>
              </div>
              
              <Button onClick={downloadProject} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Project Files
              </Button>
              
              <div className="text-xs text-gray-500 space-y-1">
                <p>Includes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Generated code in selected framework</li>
                  <li>Package.json with dependencies</li>
                  <li>README with setup instructions</li>
                  <li>Original prompt for reference</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default CodeGenerator
