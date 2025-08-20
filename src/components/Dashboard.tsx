import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Brain, Stethoscope, Calendar, User, LogOut } from 'lucide-react';

// Mock doctors database
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'General Medicine',
    experience: '10 years',
    rating: 4.8,
    specialties: ['hypertension', 'diabetes', 'general health', 'fever', 'headache'],
    availability: 'Available now'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    experience: '15 years',
    rating: 4.9,
    specialties: ['heart disease', 'chest pain', 'hypertension', 'cardiac', 'cardiovascular'],
    availability: 'Available in 30 mins'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Internal Medicine',
    experience: '8 years',
    rating: 4.7,
    specialties: ['diabetes', 'respiratory', 'cough', 'breathing', 'asthma'],
    availability: 'Available now'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Emergency Medicine',
    experience: '12 years',
    rating: 4.8,
    specialties: ['emergency', 'trauma', 'severe pain', 'urgent care', 'critical'],
    availability: 'Available now'
  }
];

// AI symptom analysis function
const analyzeSymptoms = (symptoms: string) => {
  const lowerSymptoms = symptoms.toLowerCase();
  
  if (lowerSymptoms.includes('chest pain') || lowerSymptoms.includes('heart') || lowerSymptoms.includes('cardiac')) {
    return {
      condition: 'Possible cardiac issue',
      urgency: 'High',
      recommendations: ['Immediate medical attention', 'Monitor vital signs', 'Avoid physical exertion'],
      doctorType: 'cardiology'
    };
  }
  
  if (lowerSymptoms.includes('diabetes') || lowerSymptoms.includes('blood sugar') || lowerSymptoms.includes('glucose')) {
    return {
      condition: 'Diabetes management needed',
      urgency: 'Medium',
      recommendations: ['Monitor blood glucose', 'Follow diabetic diet', 'Regular medication'],
      doctorType: 'diabetes'
    };
  }
  
  if (lowerSymptoms.includes('fever') || lowerSymptoms.includes('headache') || lowerSymptoms.includes('cold')) {
    return {
      condition: 'Common illness symptoms',
      urgency: 'Low',
      recommendations: ['Rest and hydration', 'Monitor temperature', 'Over-the-counter medication'],
      doctorType: 'general health'
    };
  }
  
  if (lowerSymptoms.includes('cough') || lowerSymptoms.includes('breathing') || lowerSymptoms.includes('respiratory')) {
    return {
      condition: 'Respiratory symptoms',
      urgency: 'Medium',
      recommendations: ['Monitor breathing', 'Stay hydrated', 'Avoid triggers'],
      doctorType: 'respiratory'
    };
  }
  
  return {
    condition: 'General health consultation needed',
    urgency: 'Low',
    recommendations: ['Describe symptoms in detail', 'Monitor changes', 'General health check'],
    doctorType: 'general health'
  };
};

const getRecommendedDoctors = (analysis: any) => {
  return doctors.filter(doctor => 
    doctor.specialties.some(specialty => 
      specialty.includes(analysis.doctorType) || 
      analysis.condition.toLowerCase().includes(specialty)
    )
  ).slice(0, 3);
};

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [recommendedDoctors, setRecommendedDoctors] = useState<any[]>([]);

  const handleAnalyzeSymptoms = () => {
    if (!symptoms.trim()) {
      toast({
        title: "Please enter your symptoms",
        description: "Describe what you're experiencing",
        variant: "destructive"
      });
      return;
    }

    const result = analyzeSymptoms(symptoms);
    setAnalysis(result);
    const doctors = getRecommendedDoctors(result);
    setRecommendedDoctors(doctors);
    
    toast({
      title: "Analysis Complete",
      description: "AI has analyzed your symptoms and found suitable doctors",
    });
  };

  const handleBookConsultation = (doctorName: string) => {
    toast({
      title: "Consultation Booked",
      description: `Your consultation with ${doctorName} has been scheduled`,
    });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Healthcare Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.name}</p>
          </div>
          <Button variant="outline" onClick={logout} className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{user?.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="font-medium">{user?.age} years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Medical History</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {user?.medicalHistory.length ? (
                    user.medicalHistory.map((condition, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-xs text-muted-foreground">No recorded history</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Symptom Analysis */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI Symptom Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Describe your symptoms
                </label>
                <Textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Please describe what you're experiencing... (e.g., fever, headache, chest pain, difficulty breathing)"
                  className="mt-1"
                  rows={3}
                />
              </div>
              <Button onClick={handleAnalyzeSymptoms} className="w-full">
                Analyze Symptoms
              </Button>

              {analysis && (
                <div className="border rounded-lg p-4 bg-medical-light">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-3 h-3 rounded-full ${getUrgencyColor(analysis.urgency)}`}></div>
                    <h3 className="font-semibold text-foreground">{analysis.condition}</h3>
                    <Badge variant={analysis.urgency === 'High' ? 'destructive' : 'secondary'}>
                      {analysis.urgency} Priority
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Recommendations:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {analysis.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recommended Doctors */}
          {recommendedDoctors.length > 0 && (
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Recommended Doctors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedDoctors.map((doctor) => (
                    <div key={doctor.id} className="border rounded-lg p-4 hover:shadow-card-medical transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                          <p className="text-sm text-primary">{doctor.specialty}</p>
                        </div>
                        <Badge className="bg-trust-green text-white">
                          ★ {doctor.rating}
                        </Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-xs text-muted-foreground">
                          Experience: {doctor.experience}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-primary" />
                          <p className="text-xs text-trust-green">{doctor.availability}</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleBookConsultation(doctor.name)}
                        size="sm"
                        className="w-full"
                      >
                        Book Consultation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};