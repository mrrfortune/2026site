import { FileText, AlertCircle, Scale, Ban, DollarSign, Gavel } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        "By accessing and using EchoShift's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these Terms of Service, please do not use this site or our services.",
        "We reserve the right to update and change these Terms of Service at any time without notice. Continued use of the service after any such changes constitutes your consent to such changes."
      ]
    },
    {
      icon: Scale,
      title: "Use License",
      content: [
        "Permission is granted to temporarily access and use the materials on EchoShift's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
        "Under this license, you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on EchoShift's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by EchoShift at any time. Upon termination, you must destroy any downloaded materials in your possession whether in electronic or printed format."
      ]
    },
    {
      icon: AlertCircle,
      title: "Disclaimer of Warranties",
      content: [
        "The materials on EchoShift's website and services are provided on an 'as is' basis. EchoShift makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, EchoShift does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
        "We do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We make no warranty regarding the quality of any products, services, information, or other material purchased or obtained through our services."
      ]
    },
    {
      icon: Ban,
      title: "Limitations of Liability",
      content: [
        "In no event shall EchoShift or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EchoShift's website, even if EchoShift or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
        "Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid to us for the services in the twelve (12) months preceding the claim."
      ]
    },
    {
      icon: DollarSign,
      title: "Payment Terms",
      content: [
        "Certain services may require payment of fees. You agree to pay all fees in accordance with the payment terms in effect at the time the fee becomes payable.",
        "All fees are non-refundable unless otherwise stated in your service agreement. We reserve the right to change our fees at any time, with notice provided to you in advance.",
        "If you fail to pay fees when due, we may suspend or terminate your access to the services. You are responsible for all applicable taxes, and we will charge tax when required to do so.",
        "For recurring subscription services, your payment method will be charged automatically at the beginning of each billing cycle. You may cancel your subscription at any time through your account settings."
      ]
    },
    {
      icon: Gavel,
      title: "Governing Law",
      content: [
        "These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the State of California, United States.",
        "Any disputes arising from or relating to these terms or your use of our services shall be resolved through binding arbitration in San Francisco, California, except that either party may seek injunctive relief in any court of competent jurisdiction.",
        "You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the service or these Terms of Service must be filed within one (1) year after such claim or cause of action arose or be forever barred."
      ]
    }
  ];

  return (
    <div className="min-h-screen dark:bg-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: December 22, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Welcome to EchoShift. These Terms of Service govern your use of our website located at echoshift.agency 
            and our services. By accessing or using our website and services, you agree to be bound by these terms. 
            Please read them carefully before proceeding.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="border-l-4 border-purple-600 dark:border-purple-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Acceptable Use Section */}
        <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
          <h3 className="text-xl mb-3 dark:text-white flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            Acceptable Use Policy
          </h3>
          <div className="space-y-3 text-slate-600 dark:text-slate-300">
            <p className="leading-relaxed">
              You agree not to use our services to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on any third party's intellectual property rights</li>
              <li>Upload or transmit viruses, malware, or any malicious code</li>
              <li>Engage in any activity that disrupts or interferes with our services</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Harass, abuse, or harm another person or entity</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
              <li>Collect or harvest any information from our services without permission</li>
            </ul>
          </div>
        </div>

        {/* Service Changes Section */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
          <h3 className="text-xl mb-3 dark:text-white">Service Modifications and Termination</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            We reserve the right to modify or discontinue, temporarily or permanently, our services (or any part thereof) 
            with or without notice. We shall not be liable to you or any third party for any modification, suspension, 
            or discontinuance of the services.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            We may terminate or suspend your access to our services immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms of Service.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2 dark:text-white">Questions About These Terms?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-1 text-slate-600 dark:text-slate-300">
                <p>Email: <a href="mailto:legal@echoshift.agency" className="text-purple-600 dark:text-purple-400 hover:underline">legal@echoshift.agency</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
