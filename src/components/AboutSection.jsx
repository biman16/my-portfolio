import { User, Briefcase, Code } from "lucide-react";


export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
            </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate Web Developer | UI/UX Designer | Data Analysts</h3>
                <p className="text-muted-forground">I am dedicated to crafting efficient, scalable, and user-focused digital solutions. With expertise in web development, UI/UX design, and data analysis, I combine technical skills with creativity to deliver products that enhance user experiences and support business growth.</p>
                <p className="text-muted-forground">I love bringing ideas to life through code, design, and data. From designing smooth user journeys to building powerful web apps, I aim to create digital experiences that are both visually appealing and impactful.</p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
                    <a href="" className="cosmic-button">Get in touch</a>
                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-blue-100 transition-colors duration-300">Downlod CV</a>
                </div>
                
            </div>

            <div className="grid-cols-1 gap-6 ">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web Development</h4>
                            <p className="text-muted-foreground">Creating responsive websites and web applications with modern farmeworks.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">UI/UX Design</h4>
                            <p className="text-muted-foreground">Desining intutive user interfaces and seamless user experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Project Management</h4>
                            <p className="text-muted-foreground">Leading projects from conception to completion with agile methedologies.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </section>
    );
}
