"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Notebook, Brain, Cpu, Network, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn, ScaleIn } from "@/components/animations"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.01]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070"
            alt="Background"
            fill
            className="object-cover opacity-5 dark:opacity-[0.02] transition-opacity duration-700 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 mb-8 backdrop-blur-sm">
              <Badge variant="outline" className="px-6 py-1.5 text-sm bg-background/50 backdrop-blur-sm">
                Automation Expert & Researcher
              </Badge>
            </div>
            <div className="relative">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Dr. Sudip Chakraborty
                </span>
              </motion.h1>
              <div className="w-40 h-2 bg-gradient-to-r from-primary/50 to-transparent rounded-full mx-auto mb-6" />
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Pioneering the Future of Technology
            </motion.p>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg mb-12 text-muted-foreground"
          >
            With over 22 years of experience in pioneering automation solutions, blockchain architecture, 
            and robotics research. Leading innovation through patents, publications, and cutting-edge projects.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="gap-2 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-primary/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              <Download className="h-4 w-4 transition-transform group-hover:scale-110 duration-300" />
              <span className="relative">Download CV</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group"
            >
              <Link href="#contact" className="gap-2">
                Contact Me
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">Areas of Expertise</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Artificial Intelligence",
                description: "Deep learning, machine learning, and neural networks for intelligent systems.",
                delay: 0.2
              },
              {
                icon: Notebook,
                title: "Robotics",
                description: "Industrial automation, robotic process control, and autonomous systems.",
                delay: 0.4
              },
              {
                icon: Cpu,
                title: "IoT & Embedded Systems",
                description: "Smart device development, sensor networks, and real-time systems.",
                delay: 0.6
              },
              {
                icon: Network,
                title: "Blockchain",
                description: "Distributed ledger technology, smart contracts, and decentralized applications.",
                delay: 0.8
              }
            ].map((item, index) => (
              <ScaleIn key={index} delay={item.delay}>
                <ExpertiseCard {...item} />
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Robot Navigation",
                description: "Development of an AI-powered navigation system for industrial robots using computer vision and deep learning.",
                status: "Patent Granted",
                tags: ["Robotics", "AI", "Computer Vision"],
                delay: 0.2
              },
              {
                title: "Blockchain-based Supply Chain",
                description: "Implementation of a transparent and secure supply chain management system using blockchain technology.",
                status: "Completed",
                tags: ["Blockchain", "IoT", "Supply Chain"],
                delay: 0.4
              },
              {
                title: "Smart Factory Automation",
                description: "Design and implementation of an IoT-based smart factory monitoring and control system.",
                status: "Ongoing",
                tags: ["IoT", "Automation", "Industry 4.0"],
                delay: 0.6
              }
            ].map((project, index) => (
              <FadeIn key={index} delay={project.delay}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ExpertiseCard({
  icon: Icon,
  title,
  description
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-br from-background to-muted/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] group-hover:opacity-[0.03] transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-gradient-to-br from-background to-muted p-4 rounded-full border border-primary/10 group-hover:border-primary/20 transition-colors duration-500">
            <Icon className="h-8 w-8 text-primary transition-all duration-500 group-hover:scale-110" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  status,
  tags
}: {
  title: string
  description: string
  status: string
  tags: string[]
}) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-br from-background to-muted/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] group-hover:opacity-[0.03] transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-8 relative z-10">
        <div className="flex justify-between items-start gap-4 mb-6">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
          <Badge 
            variant={status === "Completed" ? "default" : status === "Ongoing" ? "secondary" : "outline"}
            className="transition-all duration-300 group-hover:scale-105 whitespace-nowrap"
          >
            {status}
          </Badge>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline"
              className="transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 cursor-default"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}