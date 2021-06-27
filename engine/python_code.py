## // * New code
#!/usr/bin/env python
# coding: utf-8

# # 1. Install and Import Dependencies

# In[2]:


# get_ipython().system('pip install mediapipe opencv-python')


# In[1]:


import mediapipe as mp
import cv2
import numpy as np
import uuid
import os


# In[2]:


mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands


# # 2. Draw Hands
# <img src=https://i.imgur.com/qpRACer.png />

# In[3]:


import pyautogui as pag
import webbrowser
import time
import sys


# # 5. Calculate Multiple Angles

# In[4]:


# get_ipython().system('pip install matplotlib')


# In[5]:


from matplotlib import pyplot as plt


# ### LEFT HAND  
# index  down   0 
# middle down   1 
# ring   down   2 
# pinky  down   3
# spiderman     4
# kcube         5
# ### RIGHT HAND
# index  down   6 
# middle down   7 
# ring   down   8 
# pinky  down   9
# spiderman     10
# kcube         11
# 

# In[6]:


#HAND GESTURES 
def index_down(a):
    if(not a[0] and a[1] and not a[2] and not a[3] and not a[4]  ):
        return True
    return False
def middle_down(a):
    if(not a[0] and not a[1] and a[2] and not a[3] and not a[4]  ):
        return True
    return False
def ring_down(a):
    if(not a[0] and not a[1] and not a[2] and  a[3] and not a[4]  ):
        return True
    return False
def pinky_down(a):
    if(not a[0] and not a[1] and not a[2] and not a[3] and  a[4]  ):
        return True
    return False

def spiderman(a):
    if(not a[0] and not a[1] and a[2] and a[3] and not a[4]  ):
        return True
    return False
def kcube(a):
    if(not a[0] and  a[1] and a[2] and  a[3] and not a[4]  ):
        return True
    return False


# In[7]:


#FUNCTIONS / OPERATIONS 
def page_up():
    pag.press("pageup")

def page_down():
    pag.press("pagedown")

def right_click():
    pag.click(button="right")

def left_click():
    pag.click(button="left")
    
def move_left():
    pag.move(-15, 0)
    
def move_right():
    pag.move(15, 0)
    
def move_down():
    pag.move(0, -15)
    
def move_up():
    pag.move(0, 15)

def open_google():
    webbrowser.open("https://www.google.com")
    time.sleep(3)
    pag.press('tab')
    pag.press('enter')

def take_screenshot():
    pag.screenshot()

def arrow_left():
    pag.press('left')

def arrow_right():
    pag.press('right')


# In[8]:


def draw_finger_angles(image, results, joint_list):
    # Loop through hands
    
    left_points=[]
    right_points=[]
    left_down=[]
    right_down=[]
    
    for hand in results.multi_hand_landmarks:
        #Loop through joint sets 
        #for joint in joint_list:
        a=hand.landmark[0].x 
        b=hand.landmark[4].x
        if(a<b):#left points
            for i in range(21):
                left_points.append(np.array([hand.landmark[i].x, hand.landmark[i].y]))
        elif(a>b): 
            for i in range(21):
                right_points.append(np.array([hand.landmark[i].x, hand.landmark[i].y]))
    
    if(len(left_points)>0):
        for i in range(4,21,4):
            if(left_points[i][1] > left_points[i-2][1]):
                left_down.append(True)
            else:
                left_down.append(False)
    if(len(right_points)>0):
        for i in range(4,21,4):
            if(right_points[i][1] > right_points[i-2][1]):
                right_down.append(True)
            else:
                right_down.append(False)
    
    

    #         cv2.putText(image, "1", tuple(np.multiply(points[8], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)


#         cv2.putText(image, "2", tuple(np.multiply(points[12], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

#         cv2.putText(image, "3", tuple(np.multiply(points[16], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

#         cv2.putText(image, "4", tuple(np.multiply(points[20], [640, 480]).astype(int)),
#                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

    if(len(left_points)>0):
        cv2.putText(image, "left", tuple(np.multiply(left_points[0], [640, 480]).astype(int)),
               cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

    if(len(right_points)>0):
        cv2.putText(image, "right", tuple(np.multiply(right_points[0], [640, 480]).astype(int)),
               cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)


#     if(len(left_points)>0 and len(right_points)>0): # index overlap 
#         pag.click(button="right")
    
    if(len(left_points)>0):
        
        if(index_down(left_down) and custom_gesture.get("0")!=None):
            custom_gesture["0"]()
        if(middle_down(left_down) and custom_gesture.get("1")!=None):
            custom_gesture["1"]()
        if(ring_down(left_down) and custom_gesture.get("2")!=None):
            custom_gesture["2"]()
        if(pinky_down(left_down) and custom_gesture.get("3")!=None):
            custom_gesture["3"]()
        if(spiderman(left_down) and custom_gesture.get("4")!=None):
            custom_gesture["4"]()
        if(kcube(left_down) and custom_gesture.get("5")!=None):
            custom_gesture["5"]()
   
#         if(points[16][1] < points[14][1]):
#             pass
#         if(points[20][1] < points[18][1]):
#             pass


    if(len(right_points)>0):#right hand

        if(index_down(right_down) and custom_gesture.get("6")!=None):
            custom_gesture["6"]()
        if(middle_down(right_down) and custom_gesture.get("7")!=None):
            custom_gesture["7"]()
        if(ring_down(right_down) and custom_gesture.get("8")!=None):
            custom_gesture["8"]()
        if(pinky_down(right_down) and custom_gesture.get("9")!=None):
            custom_gesture["9"]()
        if(spiderman(right_down) and custom_gesture.get("10")!=None):
            custom_gesture["10"]()
        if(kcube(right_down) and custom_gesture.get("11")!=None):
            custom_gesture["11"]()
            
    return image


# In[9]:



function_dic={"page_up":page_up,"page_down":page_down,"left_click":left_click,"right_click":right_click,
"move_left":move_left,"move_right":move_right,"move_up":move_up,"move_down":move_down,
"open_google":open_google,"take_screenshot":take_screenshot,"arrow_left":arrow_left,"arrow_right":arrow_right}

custom_gesture={}
for i in range(1,len(sys.argv)):
    custom_gesture[str(i)]=function_dic[sys.argv[i]]
print("custom_gesture =",custom_gesture, 'args=', sys.argv)
# print("heelo")
# custom_gesture={"10":page_up,"11":page_down,"0":right_click}
# custom_gesture[sys.argv[1]]=function_dic[sys.argv[2]]






# In[10]:


cap = cv2.VideoCapture(0)
results=0
with mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.5) as hands: 
    while cap.isOpened():
        ret, frame = cap.read()
        
        # BGR 2 RGB
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Flip on horizontal
        image = cv2.flip(image, 1)
        
        # Set flag
        image.flags.writeable = False
        
        # Detections
        results = hands.process(image)
        
        # Set flag to true
        image.flags.writeable = True
        
        # RGB 2 BGR
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        
        # Detections
        # print(results)
        
        # Rendering results
        if results.multi_hand_landmarks:
            for num, hand in enumerate(results.multi_hand_landmarks):
                mp_drawing.draw_landmarks(image, hand, mp_hands.HAND_CONNECTIONS, 
                                        mp_drawing.DrawingSpec(color=(121, 22, 76), thickness=2, circle_radius=4),
                                        mp_drawing.DrawingSpec(color=(250, 44, 250), thickness=2, circle_radius=2),
                                         )
                
                # Render left or right detection
          
                    
            # Draw angles to image from joint list
            draw_finger_angles(image, results, [[8,7,6], [12,11,10], [16,15,14], [20,19,18]])
            
        # Save our image    
        #cv2.imwrite(os.path.join('Output Images', '{}.jpg'.format(uuid.uuid1())), image)
        cv2.imshow('Hand Tracking', image)

        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()


# In[11]:


#results.multi_hand_landmarks[0].landmark[mp_hands.HandLandmark.WRIST]


# In[ ]:


results.multi_handedness[0].classification


# In[ ]:
sys.stdout.flush()




# In[ ]:





# In[ ]:






# ! old code
# # !pip install mediapipe opencv-python tensorflow pyautogui
# import mediapipe as mp
# import cv2
# import numpy as np
# import uuid
# import os

# mp_drawing = mp.solutions.drawing_utils
# mp_hands = mp.solutions.hands

# import pyautogui as pag
# def get_label(index, hand, results):
#     output = None
#     for idx, classification in enumerate(results.multi_handedness):
#         if classification.classification[0].index == index:
#             # Process results
#             label = classification.classification[0].label
#             score = classification.classification[0].score
#             text = '{} {}'.format(label, round(score, 2))
            
#             # Extract Coordinates
#             coords = tuple(np.multiply(
#                 np.array((hand.landmark[mp_hands.HandLandmark.WRIST].x, hand.landmark[mp_hands.HandLandmark.WRIST].y)),
#             [640,480]).astype(int))
            
#             output = text, coords
            
#     return output

# # !pip install matplotlib

# from matplotlib import pyplot as plt
# joint_list = [[8,7,6], [12,11,10], [16,15,14], [20,19,18]]
# joint_list[3]

# def draw_finger_angles(image, results, joint_list):
    
#     # Loop through hands
#     for hand in results.multi_hand_landmarks:
#         #Loop through joint sets 
#         for joint in joint_list:
#             a = np.array([hand.landmark[joint[0]].x, hand.landmark[joint[0]].y]) # First coord
#             b = np.array([hand.landmark[joint[1]].x, hand.landmark[joint[1]].y]) # Second coord
#             c = np.array([hand.landmark[joint[2]].x, hand.landmark[joint[2]].y]) # Third coord
            
#             radians = np.arctan2(c[1] - b[1], c[0]-b[0]) - np.arctan2(a[1]-b[1], a[0]-b[0])
#             angle = np.abs(radians*180.0/np.pi)
            
#             if angle > 180.0:
#                 angle = 360-angle
#             if(joint[0]==8):
                
#                 if(angle <150.0 ):
#                     pag.press("pagedown")
       
#             if(joint[0]==12):
#                 if(angle <150.0 ):
#                     pag.press("pageup")

                
#             cv2.putText(image, str(round(angle, 2)), tuple(np.multiply(b, [640, 480]).astype(int)),
#                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)
#     return image

# cap = cv2.VideoCapture(0)
# result=0
# with mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.5) as hands: 
#     while cap.isOpened():
#         ret, frame = cap.read()
        
#         # BGR 2 RGB
#         image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
#         # Flip on horizontal
#         image = cv2.flip(image, 1)
        
#         # Set flag
#         image.flags.writeable = False
        
#         # Detections
#         results = hands.process(image)
        
#         # Set flag to true
#         image.flags.writeable = True
        
#         # RGB 2 BGR
#         image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        
#         # Detections
#         print(results)
        
#         # Rendering results
#         if results.multi_hand_landmarks:
#             for num, hand in enumerate(results.multi_hand_landmarks):
#                 mp_drawing.draw_landmarks(image, hand, mp_hands.HAND_CONNECTIONS, 
#                                         mp_drawing.DrawingSpec(color=(121, 22, 76), thickness=2, circle_radius=4),
#                                         mp_drawing.DrawingSpec(color=(250, 44, 250), thickness=2, circle_radius=2),
#                                          )
                
#                 # Render left or right detection
#                 if get_label(num, hand, results):
#                     text, coord = get_label(num, hand, results)
#                     cv2.putText(image, text, coord, cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
            
#             # Draw angles to image from joint list
#             draw_finger_angles(image, results, [[8,7,6], [12,11,10]])
            
#         # Save our image    
#         #cv2.imwrite(os.path.join('Output Images', '{}.jpg'.format(uuid.uuid1())), image)
#         cv2.imshow('Hand Tracking', image)

#         if cv2.waitKey(10) & 0xFF == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()



