import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload, Zap, Shield, AlertTriangle, CheckCircle, Eye, MapPin } from "lucide-react";
import { toast } from "sonner";

interface SecurityAnalysisProps {
  serviceType: 'cctv' | 'general';
}

const SecurityAnalysis = ({ serviceType }: SecurityAnalysisProps) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!uploadedImage) {
      toast.error("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis (replace with actual AI service)
    setTimeout(() => {
      const mockAnalysis = {
        overallRisk: "Medium",
        vulnerabilities: [
          {
            id: 1,
            type: "Blind Spot",
            location: "Rear entrance",
            severity: "High",
            description: "Limited visibility near the back door creates a potential entry point for intruders.",
            recommendation: "Install a wide-angle camera covering the rear entrance and surrounding area."
          },
          {
            id: 2,
            type: "Poor Lighting",
            location: "Side pathway",
            severity: "Medium",
            description: "Dark pathway provides cover for potential intruders.",
            recommendation: "Add motion-activated LED lights with infrared capability for night vision."
          },
          {
            id: 3,
            type: "Accessible Windows",
            location: "Ground floor windows",
            severity: "Medium",
            description: "Ground floor windows lack visible security measures.",
            recommendation: "Install window sensors and consider security film or bars for vulnerable windows."
          }
        ],
        recommendations: [
          {
            priority: "High",
            item: "4x HD CCTV Cameras",
            coverage: "Front entrance, rear entrance, side pathways, garden",
            estimatedCost: "£800-1200"
          },
          {
            priority: "Medium",
            item: "Motion-Activated Lighting",
            coverage: "All dark areas identified",
            estimatedCost: "£200-400"
          },
          {
            priority: "Medium",
            item: "Window Security Sensors",
            coverage: "All ground floor windows",
            estimatedCost: "£150-300"
          }
        ]
      };

      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      toast.success("Security analysis completed!");
    }, 3000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Eye className="w-4 h-4" />;
      case 'low': return <CheckCircle className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Analysis Header */}
      <Card className="bg-gradient-subtle border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary p-2 rounded-lg">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">AI Security Analysis</h3>
              <p className="text-muted-foreground">
                {serviceType === 'cctv' 
                  ? "Upload a photo of your property to get AI-powered CCTV placement recommendations"
                  : "Get personalized security recommendations based on your property analysis"
                }
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-success" />
            <span>Powered by advanced AI • Free analysis • Instant results</span>
          </div>
        </CardContent>
      </Card>

      {/* Image Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Upload Property Image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              {imagePreview ? (
                <div className="space-y-4">
                  <img 
                    src={imagePreview} 
                    alt="Property preview" 
                    className="max-w-full h-64 object-cover mx-auto rounded-lg"
                  />
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" onClick={() => {
                      setImagePreview(null);
                      setUploadedImage(null);
                      setAnalysis(null);
                    }}>
                      Remove Image
                    </Button>
                    <Button onClick={analyzeImage} disabled={isAnalyzing}>
                      {isAnalyzing ? (
                        <>
                          <Zap className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Analyze Security
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                  <div>
                    <p className="text-lg font-medium">Upload a photo of your property</p>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG up to 10MB. Include entrances, windows, and outdoor areas.
                    </p>
                  </div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="max-w-xs mx-auto"
                  />
                </div>
              )}
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p>💡 <strong>Tips for better analysis:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Include multiple angles of your property</li>
                <li>Show all entry points (doors, windows, gates)</li>
                <li>Capture outdoor areas and potential hiding spots</li>
                <li>Take photos during daylight for better visibility</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Overall Risk Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Overall Risk Level</div>
                  <Badge variant={getRiskColor(analysis.overallRisk)} className="text-lg px-4 py-2">
                    {analysis.overallRisk}
                  </Badge>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground">
                    Based on our AI analysis, we've identified several areas that could benefit from enhanced security measures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vulnerabilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Identified Vulnerabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.vulnerabilities.map((vuln: any) => (
                  <div key={vuln.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-${getRiskColor(vuln.severity)}/10`}>
                        <div className={`text-${getRiskColor(vuln.severity)}`}>
                          {getSeverityIcon(vuln.severity)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{vuln.type}</h4>
                          <Badge variant={getRiskColor(vuln.severity)} className="text-xs">
                            {vuln.severity}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {vuln.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{vuln.description}</p>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-sm font-medium text-foreground mb-1">Recommended Solution:</p>
                          <p className="text-sm text-muted-foreground">{vuln.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Recommended Security Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.recommendations.map((rec: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge variant={rec.priority === 'High' ? 'destructive' : 'secondary'}>
                          {rec.priority} Priority
                        </Badge>
                        <h4 className="font-semibold">{rec.item}</h4>
                      </div>
                      <div className="text-primary font-semibold">{rec.estimatedCost}</div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">Coverage: {rec.coverage}</p>
                    <Button variant="outline" size="sm">
                      Get Quotes for This Solution
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-subtle">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Ready to Secure Your Property?</h3>
              <p className="text-muted-foreground mb-6">
                Get personalized quotes from vetted security providers based on this AI analysis.
              </p>
              <div className="flex gap-3 justify-center">
                <Button size="lg" variant="cta">
                  Get Custom Quotes
                </Button>
                <Button size="lg" variant="outline">
                  Download Analysis Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SecurityAnalysis;