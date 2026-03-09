"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Wrench,
  Repeat,
  Home,
  FileText,
  History,
  CheckCircle,
  MessageSquare,
  LayoutDashboard,
  Clock,
  Truck,
  CheckSquare,
  Users,
  BarChart2,
  Download,
  Settings as SettingsIcon,
  PlusCircle,
  Search,
  Bell,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Info,
  MapPin,
  AlertCircle,
  Edit3,
  Trash2,
  Eye,
  Lock,
  Plus,
  Sliders,
  AlertTriangle,
  Minus,
  Navigation,
  Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Role = 'user' | 'admin';

export default function App() {
  const [currentRole, setCurrentRole] = useState<Role>('user');
  const [activeSection, setActiveSection] = useState<string>('user-home');

  const toggleRole = () => {
    if (currentRole === 'user') {
      setCurrentRole('admin');
      setActiveSection('admin-dashboard');
    } else {
      setCurrentRole('user');
      setActiveSection('user-home');
    }
  };

  const renderSidebar = () => (
    <aside className="w-64 bg-sidebar border-r border-gray-200 flex flex-col h-full flex-shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <Wrench className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-gray-900 leading-none text-lg">FixMyRoad</h1>
          <p className="text-xs text-gray-500 mt-1">
            {currentRole === 'user' ? 'Civic Engagement' : 'Admin Maintenance Portal'}
          </p>
        </div>
      </div>

      <div className="px-4 mb-4">
        <button
          onClick={toggleRole}
          className={`w-full py-2 px-4 ${currentRole === 'user' ? 'bg-gray-900' : 'bg-primary'} text-white rounded-lg flex items-center justify-between text-sm font-medium transition-colors`}
        >
          <span>{currentRole === 'user' ? 'User Mode' : 'Admin Mode'}</span>
          <Repeat className="w-4 h-4" />
        </button>
      </div>

      <nav className="flex-1 px-2 space-y-1 overflow-y-auto scrollbar-hide">
        {currentRole === 'user' ? (
          <div className="space-y-1">
            <NavItem
              icon={<Home className="mr-3 h-5 w-5" />}
              label="Home"
              active={activeSection === 'user-home'}
              onClick={() => setActiveSection('user-home')}
            />
            <NavItem
              icon={<FileText className="mr-3 h-5 w-5" />}
              label="My Reports"
              active={activeSection === 'user-reports'}
              onClick={() => setActiveSection('user-reports')}
            />
            <NavItem
              icon={<History className="mr-3 h-5 w-5" />}
              label="History"
              active={activeSection === 'user-history'}
              onClick={() => setActiveSection('user-history')}
            />
            <NavItem
              icon={<CheckCircle className="mr-3 h-5 w-5" />}
              label="My Confirmations"
              active={activeSection === 'user-confirmations'}
              onClick={() => setActiveSection('user-confirmations')}
            />
            <NavItem
              icon={<MessageSquare className="mr-3 h-5 w-5" />}
              label="My Comments"
              active={activeSection === 'user-comments'}
              onClick={() => setActiveSection('user-comments')}
            />
          </div>
        ) : (
          <div className="space-y-1">
            <NavItem
              icon={<LayoutDashboard className="mr-3 h-5 w-5" />}
              label="Dashboard"
              active={activeSection === 'admin-dashboard'}
              onClick={() => setActiveSection('admin-dashboard')}
            />
            <NavItem
              icon={<Clock className="mr-3 h-5 w-5" />}
              label="Pending Reports"
              active={activeSection === 'admin-pending'}
              onClick={() => setActiveSection('admin-pending')}
            />
            <NavItem
              icon={<Truck className="mr-3 h-5 w-5" />}
              label="In Progress"
              active={activeSection === 'admin-inprogress'}
              onClick={() => setActiveSection('admin-inprogress')}
            />
            <NavItem
              icon={<CheckSquare className="mr-3 h-5 w-5" />}
              label="Resolved"
              active={activeSection === 'admin-resolved'}
              onClick={() => setActiveSection('admin-resolved')}
            />
            <NavItem
              icon={<Users className="mr-3 h-5 w-5" />}
              label="User Management"
              active={activeSection === 'admin-users'}
              onClick={() => setActiveSection('admin-users')}
            />
            <NavItem
              icon={<BarChart2 className="mr-3 h-5 w-5" />}
              label="Analytics"
              active={activeSection === 'admin-analytics'}
              onClick={() => setActiveSection('admin-analytics')}
            />
            <NavItem
              icon={<Download className="mr-3 h-5 w-5" />}
              label="Export Data"
              active={activeSection === 'admin-export'}
              onClick={() => setActiveSection('admin-export')}
            />
          </div>
        )}

        <hr className="my-4 border-gray-200" />
        <NavItem
          icon={<SettingsIcon className="mr-3 h-5 w-5" />}
          label="Settings"
          active={activeSection === 'settings'}
          onClick={() => setActiveSection('settings')}
        />
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-4 p-2 rounded-lg bg-gray-50">
          <img
            alt="Avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR8-BjwLwMNtyMtnzqDey8NNcSZod9qi96d12KmbL3MiGx6O2bqa27AJfPGYl52CvmHQiGi1Fv5cFIJT-fj5o-Ky7u_H58wsi-caPX53KM-fYNwD8AOkw_nPrhpheb4oNsm1ueTDiut-rP5HhGrohoBINGtKE5xuAxgaREAJ-sMUPRk1cHQduZajv3WhXydtF5UWW1sOtYpQHZ5_gSTojhViuZcLMKCoG8ERCsAbR5qbxaiFnKfkNSOUwxTZy7a7WPRYYimFrVD4Q"
            referrerPolicy="no-referrer"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-gray-900 truncate">Alex Johnson</p>
            <p className="text-xs text-green-600 font-medium">1,250 PTS</p>
          </div>
        </div>
        <button
          onClick={() => setActiveSection(currentRole === 'user' ? 'report-new' : 'admin-export')}
          className="w-full py-2.5 bg-accent hover:bg-primary text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          {currentRole === 'user' ? (
            <>
              <PlusCircle className="w-5 h-5" />
              <span>Report New Issue</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Export Reports</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="h-screen overflow-hidden flex">
      {renderSidebar()}

      <main className="flex-1 h-full overflow-y-auto bg-gray-50 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeSection === 'user-home' && <UserHome onReportIssue={() => setActiveSection('report-new')} />}
            {activeSection === 'report-new' && <ReportNewIssue />}
            {activeSection === 'user-reports' && <MyReports />}
            {activeSection === 'admin-dashboard' && <AdminDashboard />}
            {activeSection === 'settings' && <Settings />}

            {/* Fallback sections */}
            {['user-history', 'user-confirmations', 'user-comments', 'admin-pending', 'admin-inprogress', 'admin-resolved', 'admin-users', 'admin-analytics', 'admin-export'].includes(activeSection) && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 capitalize">{activeSection.replace('-', ' ')}</h2>
                <p className="text-gray-500 italic">This section is coming soon...</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`nav-item ${active ? 'nav-item-active' : 'nav-item-inactive'}`}
    >
      {icon}
      {label}
    </div>
  );
}

function UserHome({ onReportIssue }: { onReportIssue: () => void }) {
  return (
    <section className="p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="relative w-full max-w-xl">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <Search className="w-5 h-5" />
          </span>
          <input
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            placeholder="Search for a location, street, or area..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="h-[400px] map-placeholder relative p-4">
              <div className="absolute top-10 left-10 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Reporter"
                      className="rounded-full w-6 h-6"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCctX-GzDSpoHYWDnc_67Kzt9iONkIjwS2JPN7PvQrcwLK0o5j45F_ygvGtJwIyVUWbmz-evhm8Dv7q547k3cSvIALzmofPRc4JEjmesn402p9oHTfzYWte-X_71TNFXFlsTdi8syk6HZNt0ZGV5hlc2Gauww6ngj5F2pmWHDmxQYcNNBTGqUYtRw3JXOSMF1qqWz9r5QbpyZeli9ZSUbyFud6znwpQ-RY4PYLeBwUv1DDZkQmkK4kJKHhLOFz5nxszYOqGmoSA4ro"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-bold">Mark Stevenson</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Pending</span>
                </div>
                <img
                  alt="Pothole"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJ543T53JRYFQBx2OSek2BAZ-yL0w6LR49ALG2FjxPaHGHqPdumOMCy3B7i4VQVnKpDpz9XDql5qmvuUYgB2T5HsYB8SUZJVlxAJUikpwn7zo1CvhO71N6POU8TZIWz6dzKh7FUuk-3fHR31f7sBbWe8u3o2cvuiSe84p6lL3i2B-bjafgddpj6w8bc_xKRiutj11h7hxeFRuz9ED22mdYlUXukOyAmUOewaqqrCJYmu7ay1Cr8ru3ycvaRmpmBbo6xnk4ae5hTI"
                  referrerPolicy="no-referrer"
                />
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">Deep pothole at 5th and Main intersection. Hazardous for cyclists.</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-accent hover:bg-primary text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 transition-colors">
                    <ThumbsUp className="w-3 h-3" /> Confirm Issue
                  </button>
                  <button className="w-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reports</h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  alt="Reporter"
                  className="rounded-full w-10 h-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjLkXPdyA65CQ10-YU6mwqnKszaG128fgANcsLmjVZl7UjL9SGz6XKxPoNOIgfPC7O2H6Wl2f8CiY36C8dS69jdx3OiCMNRM6G_ZUwXTzMqxNNKDV5wmn7ggDQ93C8jnT6P_8TceznLPcW6yuHq2yAyF559mkByL04duz_ac37tDSTUDPVigitl76Z9DovxmnNVD_0PCi73RvW4CWJAjAp6_mCMTixBoqFAabfJYJiAuUNkpAxdJ7FqzPaLuEw7iml2TzIf_opEoE"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Elena R.</h4>
                  <p className="text-xs text-gray-500">2 hours ago • Oak Street</p>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">IN PROGRESS</span>
            </div>
            <p className="text-sm text-gray-700 mb-4">Construction debris left on the bike path. Dangerous during night hours.</p>
            <img
              alt="Report Attachment"
              className="w-full h-64 object-cover rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACFdHwE1cuPzJVBANSAf523DZViNpq4Sbg56slnYl_6yj0yVs_k4SVWCls0Y3AeoyFmIKMrpIm_maHFaJj036Z9EdrhB1bW7NzGCgjFCVmSQgmpj_Ynmgdx6ZlHU4iajXEbSm8yXepK8rAsUEJqPrQdOZ7AvChlLDGB1hnjG9jr7_gldMZBcG0MTTK7iWGQ0jxtbatPWtv-GrbKftFSO9dGM31uy9PbHcvXKKZT4ikI1iUFdjdhbqjmwgh_6lOYchvWg8KCnNZLdQ"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-gray-900 rounded-xl p-4 text-white flex items-center justify-between cursor-pointer hover:bg-black transition-colors">
            <div>
              <h4 className="font-bold">Admin Dashboard</h4>
              <p className="text-xs text-gray-400">AUTHORIZED STAFF ONLY</p>
            </div>
            <ArrowRight className="w-5 h-5" />
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-green-700 mb-2">
              <Info className="w-4 h-4" />
              <h5 className="text-sm font-bold">City Update</h5>
            </div>
            <p className="text-xs text-green-800 leading-relaxed">
              Road repairs on <strong>Maple Ave</strong> are scheduled for tomorrow. 12 reports will be resolved!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Community Stats</h5>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Resolved this week</p>
                <p className="text-2xl font-bold text-primary">142</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Active Citizens</p>
                <p className="text-2xl font-bold text-gray-900">1,204</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportNewIssue() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Report New Issue</h2>
        <p className="text-gray-500">Provide details about the road issue to help municipal teams prioritize and fix it.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Reporter Name</label>
            <input className="w-full bg-gray-50 border-gray-200 rounded-lg px-3 py-2" disabled type="text" value="Alex Johnson" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">City</label>
            <select className="w-full border-gray-200 rounded-lg focus:ring-primary focus:border-primary px-3 py-2">
              <option>San Francisco</option>
              <option>Oakland</option>
              <option>San Jose</option>
            </select>
          </div>
        </div>
        <hr className="border-gray-100" />
        <div className="space-y-6">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Location Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Road Name</label>
              <input className="w-full border-gray-200 rounded-lg px-3 py-2" placeholder="e.g. Market Street" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Area / Neighborhood</label>
              <input className="w-full border-gray-200 rounded-lg px-3 py-2" placeholder="e.g. Financial District" type="text" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Nearest Landmark</label>
            <input className="w-full border-gray-200 rounded-lg px-3 py-2" placeholder="e.g. Near the Central Library entrance" type="text" />
          </div>
          <div className="h-48 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center relative overflow-hidden">
            <div className="map-placeholder w-full h-full opacity-50"></div>
            <button className="absolute bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Navigation className="w-4 h-4 text-primary" /> Pin Location on Map
            </button>
          </div>
        </div>
        <hr className="border-gray-100" />
        <div className="space-y-6">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Issue Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Issue Type</label>
              <select className="w-full border-gray-200 rounded-lg px-3 py-2">
                <option>Select Issue Type</option>
                <option>Pothole</option>
                <option>Broken Streetlight</option>
                <option>Vandalism</option>
                <option>Faded Markings</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Traffic Impact</label>
              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary" name="impact" type="radio" />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="text-primary focus:ring-primary" name="impact" type="radio" />
                  <span className="text-sm">No</span>
                </label>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Description</label>
            <textarea className="w-full border-gray-200 rounded-lg px-3 py-2" placeholder="Describe the issue in detail..." rows={4}></textarea>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-green-800 transition-colors">
            Submit Report
          </button>
        </div>
      </div>
    </section>
  );
}

function MyReports() {
  return (
    <section className="p-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Reports</h2>
          <p className="text-gray-500">Manage and track the status of your reported road issues.</p>
        </div>
        <div className="relative w-64">
          <input className="w-full border-gray-200 rounded-lg pl-8 py-2 text-sm" placeholder="Search reports..." type="text" />
          <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>
      <div className="flex border-b border-gray-200 mb-6 gap-8">
        <button className="pb-4 border-b-2 border-primary text-primary font-bold text-sm">All Reports (12)</button>
        <button className="pb-4 text-gray-500 font-medium text-sm hover:text-gray-700">Pending</button>
        <button className="pb-4 text-gray-500 font-medium text-sm hover:text-gray-700">In Progress</button>
        <button className="pb-4 text-gray-500 font-medium text-sm hover:text-gray-700">Resolved</button>
      </div>
      <div className="space-y-6">
        <ReportCard
          status="Pending Review"
          statusColor="bg-yellow-100 text-yellow-800"
          date="Oct 12, 2023"
          title="Pothole on Main St"
          description="Significant pothole located near the intersection of Main and 5th. It's causing cars to swerve dangerously into the bike lane."
          location="123 North Main St, Downtown"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAN4LHdBs_LZkSbh3CXOxFtTRSVtKgYhAmRN3gCEGJsUR09I25zXkaccCixVlDi8xJRQr3imyGIjfc7fwx7N3Q7ha0f3uWC-Z4QbVf2NO58HSsgDCEi5fUzNayl7fTUELuczSPXSNpWZ47-oYrBsB_7UrQYgkxCuvriBsqBO_0C4X5ElmnYxogdwnKqGuJjxQBVq2pV8HcAiQFm_1Tx0icVH-SMksCAtPf35sQDxRSfUZskg0s1EptnjnwE1Vpawybfsv2A9wkCt14"
        />
        <ReportCard
          status="In Progress"
          statusColor="bg-blue-100 text-blue-800"
          date="Sep 28, 2023"
          title="Faded Crosswalk"
          description="The crosswalk in front of the elementary school has faded almost completely. Hard for drivers to see at night."
          location="Oak Avenue & 2nd Street"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDyLchMIJyXRNPE53BziRGezI2pHmnamE6bL3CgRMYNUZLKk0NpVV5_MP0rzTrP4fCH2zd9Zlhg0pZmZh9JSvoQYDZ8Fz55uV0fNsQ6e7gbJX_CqkwFbqpfL9vQOC3FPqbf3fZrwLjNRPE21i7QlnzY20Fj0wIx_7glf4fm0KR7xZcTsaF-bckOwwPYMuUOBmWChg6lntmK-rAzCO4evB6J9f9RkO7zqXHUIxxnJAAt57TT4oaWPJnnXzZYqx_esY5ImGhqzBdOaNs"
          locked
        />
      </div>
    </section>
  );
}

function ReportCard({ status, statusColor, date, title, description, location, image, locked }: any) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-56 ${locked ? 'opacity-80' : ''}`}>
      <img alt="Issue" className="w-full md:w-64 h-48 md:h-auto object-cover" src={image} referrerPolicy="no-referrer" />
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className={`${statusColor} text-[10px] px-2 py-0.5 rounded font-bold uppercase`}>{status}</span>
            <span className="text-xs text-gray-400">Submitted {date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 mt-4 text-gray-400 text-xs">
            <MapPin className="w-3.5 h-3.5" /> {location}
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {locked ? (
            <>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-bold flex items-center gap-2">
                <Eye className="w-4 h-4" /> View Progress
              </button>
              <button className="px-4 py-2 bg-gray-50 text-gray-400 rounded-lg text-sm font-bold flex items-center gap-2 cursor-not-allowed" disabled>
                <Lock className="w-4 h-4" /> Edit Locked
              </button>
            </>
          ) : (
            <>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <Edit3 className="w-4 h-4" /> Edit Report
              </button>
              <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Road Maintenance Management</h2>
          <p className="text-gray-500">Monitor and manage real-time reported road issues across the city.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-accent hover:bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-colors">
            <Plus className="w-5 h-5" /> New Report
          </button>
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Sliders className="w-5 h-5" /> Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="h-[500px] map-placeholder relative">
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <div className="absolute top-4 left-4 right-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
              <input
                className="w-full pl-12 pr-4 py-3 bg-white/95 rounded-xl shadow-lg border-none focus:ring-2 focus:ring-primary"
                placeholder="Search for specific report location..."
                type="text"
              />
            </div>
          </div>
          <div className="absolute bottom-10 right-6 space-y-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50"><Plus className="w-5 h-5" /></button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50"><Minus className="w-5 h-5" /></button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50"><Navigation className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Recent Issues</h3>
          <button className="text-sm font-medium text-gray-500 flex items-center gap-1 hover:text-primary transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <AdminTableRow id="#1024" user="John Doe" initials="JD" location="Main St & 5th Ave" status="Pending" statusColor="bg-yellow-100 text-yellow-800" date="Oct 24, 2023" />
              <AdminTableRow id="#1023" user="Jane Smith" initials="JS" location="Oak Boulevard" status="In Progress" statusColor="bg-blue-100 text-blue-800" date="Oct 23, 2023" />
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <StatCard title="Reports Today" value="42" change="+12% from yesterday" changeColor="text-green-600" />
        <StatCard title="Pending Repairs" value="158" change="Action required" changeColor="text-yellow-600" icon={<AlertCircle className="w-3 h-3 inline" />} />
        <StatCard title="Fixed This Week" value="214" change="94% efficiency" changeColor="text-green-600" />
        <StatCard title="Avg Response Time" value="4.2h" change="Normal threshold" changeColor="text-gray-500" />
      </div>
    </section>
  );
}

function AdminTableRow({ id, user, initials, location, status, statusColor, date }: any) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-mono">{id}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">{initials}</div>
          {user}
        </div>
      </td>
      <td className="px-6 py-4">{location}</td>
      <td className="px-6 py-4"><span className={`px-2.5 py-1 ${statusColor} rounded-full text-[10px] font-bold uppercase`}>{status}</span></td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2 text-gray-400">
          <FileText className="w-4 h-4 hover:text-primary cursor-pointer transition-colors" />
          <Eye className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
          <Trash2 className="w-4 h-4 hover:text-red-600 cursor-pointer transition-colors" />
        </div>
      </td>
    </tr>
  );
}

function StatCard({ title, value, change, changeColor, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <span className={`text-xs ${changeColor} font-bold mb-1`}>
          {icon} {change}
        </span>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-500">Manage your profile, communication preferences, and security settings.</p>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Profile Information</h3>
            <button className="text-accent hover:text-primary font-bold text-sm transition-colors">Update Changes</button>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="relative w-32 h-32 flex-shrink-0 mx-auto md:mx-0">
              <img
                alt="User"
                className="w-full h-full rounded-full border-4 border-gray-50 shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUL3BKvzmANgEgtO-LNDWIZI6I-sTD4vRmo3_wVajkD3ICA5IUZiUmuPQKYLoQ6NLh5j4--zj-vsMiQCG6Re5YD74um-5DU602h8uluzCPddIkWjoJS6KSgbzengRWSofaDXZC305J826Ec7C68FiFN04c47_G_9V4yBKsaYYC6n36qo0nwGY5k9nzuOrGcPmoC93ZyCnGbT-RMn_pSZplHk33dPWvpisoipRmekrCi6eb9j6rKpxhvI2n4j-ota7Q_zj21WwDwKQ"
                referrerPolicy="no-referrer"
              />
              <button className="absolute bottom-1 right-1 bg-accent p-1.5 rounded-full text-white border-2 border-white hover:bg-primary transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SettingsField label="Full Name" value="Alex Johnson" />
              <SettingsField label="Email Address" value="alex.johnson@example.com" type="email" />
              <SettingsField label="Phone Number" value="+1 (555) 000-0000" />
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Preferred Language</label>
                <select className="w-full bg-gray-50 border-gray-200 rounded-lg px-3 py-2">
                  <option>English (US)</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="font-bold text-gray-900 text-lg mb-6">Notification Preferences</h3>
          <div className="space-y-6">
            <NotificationToggle icon={<FileText className="w-5 h-5" />} title="Email Notifications" description="Weekly status reports of city issues" defaultChecked />
            <NotificationToggle icon={<Bell className="w-5 h-5" />} title="Push Notifications" description="Real-time alerts for your reports" defaultChecked />
          </div>
        </div>
      </div>
    </section>
  );
}

function SettingsField({ label, value, type = "text" }: any) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-bold text-gray-400 uppercase">{label}</label>
      <input className="w-full bg-gray-50 border-gray-200 rounded-lg px-3 py-2" type={type} defaultValue={value} />
    </div>
  );
}

function NotificationToggle({ icon, title, description, defaultChecked }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">{icon}</div>
        <div>
          <p className="font-bold text-gray-900 text-sm">{title}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
      </label>
    </div>
  );
}
