import { Github } from "@/icons/Github.tsx";
import { ArrowUp } from "@/icons/ArrowUp.tsx";
import { Badge } from "@/components/Badge.tsx";

interface ProjectCardProps {
  name: string
  description: string
  technologies: string[]
  code: string
  site: string
  status: string;
}

export function ProjectCard({ code, site, technologies, name, status, description }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold tracking-tight">{name}</h3>
          <span
            className="px-4 py-1 text-xs rounded-full border border-border">
            {status}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex justify-between pt-4 space-x-4">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm bg-primary hover:bg-primary-foreground transition-colors duration-100"
          >
            <Github />
            <span>Código fuente</span>
          </a>
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm bg-primary hover:bg-primary-foreground transition-colors duration-100"
          >
            <span>Ver proyecto</span>
            <ArrowUp />
          </a>
        </div>
      </div>
    </div>
  )
}